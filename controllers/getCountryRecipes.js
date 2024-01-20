const { Recipe } = require("../models/recipe");

const getCountryRecipesUA = async (req, res) => {
    const { countryId: owner } = req.params;
    const language = "ua";
    const dishes = await Recipe.find({ owner });

    const result = dishes.map((dish) => ({
      _id: dish._id,
      recipeName: dish.recipeName[language],
      recipeImgAlt: dish.recipeImgAlt[language],
      recipeImgSmall: dish.recipeImgSmall,
    }));
    
    res.json(result);

}

const getCountryRecipesEN = async (req, res) => {
  const { countryId: owner } = req.params;
  const language = "en";
  const dishes = await Recipe.find({ owner });

  const result = dishes.map((dish) => ({
    _id: dish._id,
    recipeName: dish.recipeName[language],
    recipeImgAlt: dish.recipeImgAlt[language],
    recipeImgSmall: dish.recipeImgSmall,
  }));

  res.json(result);
};



module.exports = {
    getCountryRecipesUA,
    getCountryRecipesEN
};