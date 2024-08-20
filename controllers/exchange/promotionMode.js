const { HttpError } = require("../../helpers");
const { Reel } = require("../../models/reel");
const { Rod } = require("../../models/rod");
const cron = require('node-cron');

const collectionsMap = {
    Rod, Reel
  };

// Контроллер для управления полем promotion и датами во всех коллекциях
const promotionMode = async (req, res) => {
    const { enablePromotion, startDate, endDate, collection } = req.body;

    if (!collectionsMap[collection]) {
      return res.status(400).send('Invalid collection specified.');
    }
  
    if (typeof enablePromotion !== 'boolean') {
      return res.status(400).send('Invalid request: enablePromotion must be a boolean.');
    }
  
    if (enablePromotion) {
      if (!startDate || !endDate || isNaN(Date.parse(startDate)) || isNaN(Date.parse(endDate))) {
        return res.status(400).send('Invalid request: startDate and endDate must be valid dates.');
      }
    }
  

    const Collection = collectionsMap[collection];
    const updateData = {
        promotion: enablePromotion,
    };

    // Устанавливаем даты только если включаем акцию
    if (enablePromotion) {
      updateData.promotionStartDate = new Date(startDate);
      updateData.promotionEndDate = new Date(endDate);
    } else {
      // Очищаем даты, если выключаем акцию
      updateData.promotionStartDate = null;
        updateData.promotionEndDate = null;
        updateData.discount = "0";
    }

    await Collection.updateMany(
      { sale: false }, // условие: товар не на распродаже
      { $set: updateData } // обновляем promotion и даты
    );
  
  res
      .status(200).json({
        message: `Promotion fields ${enablePromotion ? 'enabled' : 'disabled'} successfully.`
    })

};

cron.schedule('0 0 * * *', async () => {
    try {
      const now = new Date();
  
      for (const [collectionName, Collection] of Object.entries(collectionsMap)) {
        await Collection.updateMany(
          { promotion: true, promotionEndDate: { $lte: now } },
          { $set: { promotion: false, promotionEndDate: null, promotionStartDate: null, discount: "0" } }
        );
      }
  
      console.log('Checked and updated promotions based on end dates.');
    } catch (error) {
      console.error('Error checking and updating promotions:', error);
    }
});
  
module.exports = promotionMode;
