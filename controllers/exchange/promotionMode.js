const { HttpError } = require("../../helpers");
const { Reel } = require("../../models/reel");
const { Rod } = require("../../models/rod");
const cron = require('node-cron');
const moment = require('moment-timezone');

const collectionsMap = {
  Rod, Reel
};


// Контроллер для управления акцией
const promotionMode = async (req, res) => {
  const { startDate, endDate, collection } = req.body;

  // Проверка на существование коллекции
  if (!collectionsMap[collection]) {
    throw HttpError(400, 'Invalid collection specified.')
  }

  // Проверка на валидность дат
  if (!startDate || !endDate || isNaN(Date.parse(startDate)) || isNaN(Date.parse(endDate))) {
    throw HttpError(400, 'Invalid request: startDate and endDate must be valid dates.')
  }

  // Преобразуем даты
  const startDateTimeUTC = moment.tz(startDate, 'UTC').startOf('day').toDate();
  const endDateTimeUTC = moment.tz(endDate, 'UTC').endOf('day').toDate();

  // Данные для обновления
  const updateData = {
    promotionStartDate: startDateTimeUTC,
    promotionEndDate: endDateTimeUTC,
    promotion: false // Акция будет активирована cron-задачей
  };

  const Collection = collectionsMap[collection];

    await Collection.updateMany(
      { sale: false }, //товар не участвует в распродаже
      { $set: updateData }
    );

    res.status(200).json({
      message: 'Promotion dates set successfully. Promotion will start and end on specified dates.'
    });
  
};

// Cron-задача для активации акций в нужную дату
cron.schedule('* * * * *', async () => {
  try {
    const nowUTC = moment().tz('UTC').startOf('day').toDate();
  

    for (const [collectionName, Collection] of Object.entries(collectionsMap)) {
      const result = await Collection.updateMany(
        {
          promotion: false,
          promotionStartDate: { $lte: nowUTC },
          promotionEndDate: { $gte: nowUTC }
        },
        { $set: { promotion: true } }
      );

      console.log(`Activated promotions in ${collectionName}:`, result.modifiedCount);
    }
  } catch (error) {
    console.error('Error in promotion activation cron job:', error);
  }
});

// Cron-задача для деактивации акций после окончания
cron.schedule('* * * * *', async () => {
  try {
    const nowUTC = moment().tz('UTC').endOf('day').toDate();
    console.log(nowUTC);

    for (const [collectionName, Collection] of Object.entries(collectionsMap)) {
      const result = await Collection.updateMany(
        {
          promotion: true,
          promotionEndDate: { $lt: nowUTC }
        },
        { $set: { promotion: false, promotionEndDate: null, promotionStartDate: null } }
      );

      console.log(`Deactivated promotions in ${collectionName}:`, result.modifiedCount);
    }
  } catch (error) {
    console.error('Error in promotion deactivation cron job:', error);
  }
});

module.exports = promotionMode;
