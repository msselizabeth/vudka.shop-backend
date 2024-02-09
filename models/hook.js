const { Schema, model } = require("mongoose");

const hookSchema = new Schema({
  _id: Schema.Types.ObjectId,
  render: Boolean,
  purpose: String,
  priceMain: String,
  sale: Boolean,
  salePriceMain: String,
  stock: Boolean,
  description: [
    {
      text: String,
    },
    ],
  typehooks: String,
  name: String,
  brand: String,
  series: String,
  model: [
    {
      price: String,
      salePrice: String,
      stock: Boolean,
      code: String,
      item: String,
      number: String,
      amount: String,
    },
  ],
  color: String,
  imgMain: String,
  country: String,
  alt: String,
});

const Hook = model("hooks", hookSchema);

module.exports = {
  Hook,
};
