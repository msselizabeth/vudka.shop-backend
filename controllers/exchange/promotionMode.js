const { HttpError } = require("../../helpers");
const { Reel } = require("../../models/reel");
const { Rod } = require("../../models/rod");
const cron = require('node-cron');

const collectionsMap = {
  Rod, Reel, 
};

// Контроллер для управления полем promotion и датами во всех коллекциях
const promotionMode = async (req, res) => {
  const { startDate, endDate, collection } = req.body;

  if (!collectionsMap[collection]) {
    return res.status(400).send('Invalid collection specified.');
  }

  if (!startDate || !endDate || isNaN(Date.parse(startDate)) || isNaN(Date.parse(endDate))) {
    return res.status(400).send('Invalid request: startDate and endDate must be valid dates.');
  }

  const now = new Date();
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  const updateData = {
    promotionStartDate: startDateTime,
    promotionEndDate: endDateTime,
  };

  // Если startDate совпадает с сегодняшним днем, активируем акцию сразу
  if (startDateTime <= now && endDateTime > now) {
    updateData.promotion = true;
  } else {
    updateData.promotion = false;
  }

  const Collection = collectionsMap[collection];
  await Collection.updateMany(
    { sale: false }, // условие: товар не на распродаже
    { $set: updateData } // обновляем promotion и даты
  );

  res.status(200).json({
    message: `Promotion dates set successfully. Promotion ${updateData.promotion ? 'started' : 'will start on the specified start date.'}`,
  });
};


// Задание на проверку начала акций в стартовую дату
cron.schedule('0 0 * * *', async () => {
  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (const [collectionName, Collection] of Object.entries(collectionsMap)) {
      await Collection.updateMany(
        { promotion: false, promotionStartDate: startOfDay },
        { $set: { promotion: true } }
      );
    }

    console.log('Checked and started promotions based on start dates.');
  } catch (error) {
    console.error('Error checking and starting promotions:', error);
  }
});

// Задание на проверку окончания акций
cron.schedule('0 0 * * *', async () => {
  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (const [collectionName, Collection] of Object.entries(collectionsMap)) {
      await Collection.updateMany(
        { promotion: true, promotionEndDate: { $lte: startOfDay } },
        { $set: { promotion: false, promotionEndDate: null, promotionStartDate: null } }
      );
    }

    console.log('Checked and updated promotions based on end dates.');
  } catch (error) {
    console.error('Error checking and updating promotions:', error);
  }
});

module.exports = promotionMode;
