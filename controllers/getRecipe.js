const { Recipe } = require("../models/recipe");

const getRecipeUA = async (req, res) => {
    const { recipeId } = req.params;
    const language = "ua";
    const recipe = await Recipe.findById(recipeId);
      const result = {
        _id: recipe._id,
        recipeName: recipe.recipeName[language],
        recipeImgAlt: recipe.recipeImgAlt[language],
        recipeImgSmall: recipe.recipeImgSmall,
        recipeImgHero: recipe.recipeImgHero,
        featuresDish: recipe.featuresDish[language],
        recipe: recipe.recipe[language],
        cookTechnology: recipe.cookTechnology[language],
        nutritionalValues: recipe.nutritionalValues[language],
        category: recipe.category,
        stepsRecipe: recipe.stepsRecipe[language],
      };

      res.json(result);
}

const getRecipeEN = async (req, res) => {
  const { recipeId } = req.params;
  const language = "en";
  const recipe = await Recipe.findById(recipeId);
  const result = {
    _id: recipe._id,
    recipeName: recipe.recipeName[language],
    recipeImgAlt: recipe.recipeImgAlt[language],
    recipeImgSmall: recipe.recipeImgSmall,
    recipeImgHero: recipe.recipeImgHero,
    featuresDish: recipe.featuresDish[language],
    recipe: recipe.recipe[language],
    cookTechnology: recipe.cookTechnology[language],
    nutritionalValues: recipe.nutritionalValues[language],
    category: recipe.category,
    stepsRecipe: recipe.stepsRecipe[language],
  };

  res.json(result);
};


module.exports = {
    getRecipeUA,
    getRecipeEN
};