const { Country } = require("../models/country");

const getCountriesUA = async (req, res) => {
        const language = "ua";
        const { page = 1, limit = 20} = req.query;
        const skip = (page - 1) * limit;
        const totalCount = await Country.countDocuments(); // Общее количество стран
        const totalPages = Math.ceil(totalCount / limit); 
        const countries = await Country.find({}, '', { skip, limit });
        const result = countries.map((country) => ({
          _id: country._id,
          countryName: country.countryName[language],
          imageAlt: country.imageAlt[language],
          imageSmall: country.imageSmall,
        }));
        res.json({
      totalPages,
      currentPage: page,
      result,
    });
}

const getCountriesEN = async (req, res) => {
  const language = "en";
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Country.countDocuments(); // Общее количество стран
  const totalPages = Math.ceil(totalCount / limit);
  const countries = await Country.find({}, "", { skip, limit });
  const result = countries.map((country) => ({
    _id: country._id,
    countryName: country.countryName[language],
    imageAlt: country.imageAlt[language],
    imageSmall: country.imageSmall,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
  getCountriesUA,
  getCountriesEN
};