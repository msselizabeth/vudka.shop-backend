
const { Country } = require("../models/country");

const getContinentCountriesUA  = async (req, res) => {
    const { path: owner } = req.params;
    const language = "ua";

    const countries = await Country.find({ owner });

    const result = countries.map(country => ({
      _id: country._id,
      countryName: country.countryName[language],
      imageAlt: country.imageAlt[language],
      imageSmall: country.imageSmall,
    }));

   res.json(result);
}

const getContinentCountriesEN = async (req, res) => {
  const { path: owner } = req.params;
  const language = "en";

  const countries = await Country.find({ owner });

    const result = countries.map((country) => ({
      _id: country._id,
      countryName: country.countryName[language],
      imageAlt: country.imageAlt[language],
      imageSmall: country.imageSmall,
    }));

  res.json(result);
};


module.exports = {
    getContinentCountriesUA,
    getContinentCountriesEN
};