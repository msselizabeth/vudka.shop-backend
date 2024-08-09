const { Rod } = require("../models/rod");


// Функция контроллера для получения удилищ с пагинацией и поиском
const getRods = async (req, res) => {

    const { page = 1, limit = 3, search = '' } = req.query;

    // Создаем регулярное выражение для поиска без учета регистра
    const searchRegex = new RegExp(search, 'i');

    const searchCriteria = {
        $or: [
          { name: searchRegex },
          { brand: searchRegex },
          { series: searchRegex },
          { model: searchRegex },
          { item: searchRegex }
        ]
      };

    // Получаем удилища с пагинацией и поиском
    const rods = await Rod.find(searchCriteria)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    // Получаем общее количество удилищ, соответствующих критериям поиска
    const totalRods = await Rod.countDocuments(searchCriteria);

    res.status(200).json({
      success: true,
      data: rods,
      currentPage: page,
      totalPages: Math.ceil(totalRods / limit),
      totalRods,
    });

};

module.exports = { getRods };
