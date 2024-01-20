const { Recipe } = require("../models/recipe");
const { User } = require("../models/user");


const getFavoritesUA = async (req, res) => {
    const user = req.user;
    const language = "ua";
    const favList = await Recipe.find({ _id: { $in: user.favorites } });

    const result = favList.map((favDish) => ({
      _id: favDish._id,
      recipeName: favDish.recipeName[language],
      recipeImgAlt: favDish.recipeImgAlt[language],
      recipeImgSmall: favDish.recipeImgSmall,
    }));

    res.json(result)
}

const getFavoritesEN = async (req, res) => { 
    const user = req.user;
    const language = "en";
    const favList = await Recipe.find({ _id: { $in: user.favorites } });

    const result = favList.map((favDish) => ({
      _id: favDish._id,
      recipeName: favDish.recipeName[language],
      recipeImgAlt: favDish.recipeImgAlt[language],
      recipeImgSmall: favDish.recipeImgSmall,
    }));

    res.json(result);
};

module.exports = {
    getFavoritesUA,
    getFavoritesEN,
}