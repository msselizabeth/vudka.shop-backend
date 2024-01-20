
const { Country } = require("../models/country");

const getCountryUA = async (req, res) => {
    const { countryId } = req.params;
    const language = "ua";

    const country = await Country.findById(countryId);
   
     const result = {
       _id: country._id,
       countryName: country.countryName[language],
       capitalCountry: country.capitalCountry[language],
       imageAlt: country.imageAlt[language],
       imageSmall: country.imageSmall,
       imageHero: country.imageHero,
       featuresCountryTitle: country.featuresCountryTitle[language],
       featuresCountry: country.featuresCountry[language],
       history: country.history[language],
       seasons: country.seasons[language],
     };

     res.json(result);
}

const getCountryEN = async (req, res) => {
  const { countryId } = req.params;
  const language = "en";

  const country = await Country.findById(countryId);

  const result = {
    _id: country._id,
    countryName: country.countryName[language],
    capitalCountry: country.capitalCountry[language],
    imageAlt: country.imageAlt[language],
    imageSmall: country.imageSmall,
    imageHero: country.imageHero,
    featuresCountryTitle: country.featuresCountryTitle[language],
    featuresCountry: country.featuresCountry[language],
    history: country.history[language],
    seasons: country.seasons[language],
  };

  res.json(result);
};



module.exports = {
  getCountryUA,
  getCountryEN,
};