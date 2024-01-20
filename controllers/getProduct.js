const { Product } = require("../models/product");

const getProductUA = async (req, res) => {
    const { productId } = req.params;
    const language = "ua";
    const product = await Product.findById(productId);
    const result = {
      _id: product._id,
      productName: product.productName[language],
      productImgAlt: product.productImgAlt[language],
      productImg: product.recipeImgSmall,
      kcal: product.kcal,
      macronutrients: product.macronutrients[language],
      water: product.water,
      starch: product.starch,
      cholesterol: product.cholesterol,
      sugars: product.sugars,
    };
    res.json(result);
}

const getProductEN = async (req, res) => {
  const { productId } = req.params;
  const language = "en";
  const product = await Product.findById(productId);
  const result = {
    _id: product._id,
    productName: product.productName[language],
    productImgAlt: product.productImgAlt[language],
    productImg: product.recipeImgSmall,
    kcal: product.kcal,
    macronutrients: product.macronutrients[language],
    water: product.water,
    starch: product.starch,
    cholesterol: product.cholesterol,
    sugars: product.sugars,
  };
  res.json(result);
};

module.exports = {
    getProductUA,
    getProductEN
};