const { Schema, model } = require("mongoose");

const rodSchema = new Schema({
  _id: Schema.Types.ObjectId,
  render: Boolean,
  purpose: String,
  price: String,
  stock: Boolean,
  sale: Boolean,
  salePriceMain: String,
  code: String,
  description: [
    {
      text: String,
    },
  ],
  typerods: String,
  name: String,
  brand: String,
  series: String,
  model: String,
  item: String,
  testMin: String,
  testMax: String,
  testLb: String,
  rodSize: String,
  transSize: String,
  weight: String,
  action: String,
  rodClass: String,
  design: String,
  section: String,
  guideType: String,
  country: String,
  img: [String],
  alt: String,
});

const Rod = model("rod", rodSchema);

module.exports = {
  Rod,
};
