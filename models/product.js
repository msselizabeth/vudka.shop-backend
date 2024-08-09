const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
 
  images: [String],
  models: [
    {
      num: String,
      img: String,
    },
  ], 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
