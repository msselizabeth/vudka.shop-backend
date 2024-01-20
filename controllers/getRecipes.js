const { Recipe } = require("../models/recipe");

const getRecipesUA = async (req, res) => {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;
        const totalCount = await Recipe.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);
        const language = "ua";
        const recipes = await Recipe.find({}, "", { skip, limit });
        const result = recipes.map((recipe) => ({
          _id: recipe._id,
          recipeName: recipe.recipeName[language],
          recipeImgAlt: recipe.recipeImgAlt[language],
          recipeImgSmall: recipe.recipeImgSmall,
          filterLevel: recipe.filterLevel,
          filterCategory: recipe.filterCategory,
        }));
        res.json({
          totalPages,
          currentPage: page,
          result,
        });
}

const getRecipesEN = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Recipe.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
  const language = "en";
  const recipes = await Recipe.find({}, "", { skip, limit });
  const result = recipes.map((recipe) => ({
    _id: recipe._id,
    recipeName: recipe.recipeName[language],
    recipeImgAlt: recipe.recipeImgAlt[language],
    recipeImgSmall: recipe.recipeImgSmall,
    filterLevel: recipe.filterLevel,
    filterCategory: recipe.filterCategory,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};


module.exports = {
        getRecipesUA,
        getRecipesEN
};