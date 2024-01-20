const { Product } = require("../models/product");

const getProductsUA = async (req, res) => {
      const { page = 1, limit = 20 } = req.query;
      const skip = (page - 1) * limit;
      const totalCount = await Product.countDocuments();
      const totalPages = Math.ceil(totalCount / limit);
      const language = "ua";
      const products = await Product.find({}, "", { skip, limit });
      const result = products.map((prod) => ({
        _id: prod._id,
        productName: prod.productName[language],
        productImgAlt: prod.productImgAlt[language],
        productImg: prod.recipeImgSmall,
        kcal: prod.kcal,
        macronutrients: prod.macronutrients[language],
      }));
      res.json({
        totalPages,
        currentPage: page,
        result,
      });
} 

const getProductsEN = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Product.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
  const language = "en";
  const products = await Product.find({}, "", { skip, limit });
  const result = products.map((prod) => ({
    _id: prod._id,
    productName: prod.productName[language],
    productImgAlt: prod.productImgAlt[language],
    productImg: prod.recipeImgSmall,
    kcal: prod.kcal,
    macronutrients: prod.macronutrients[language],
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
}; 

module.exports = {
        getProductsUA,
        getProductsEN
};