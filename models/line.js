const { Schema, model } = require("mongoose");

const lineSchema = new Schema({
    _id: Schema.Types.ObjectId,
  render: Boolean,
  purpose: String,
  priceMain: String,
  stock: Boolean,
  sale: Boolean,
  salePriceMain: String,
  code: String,
  description: [
    {
      text: String,
    },
  ],
  item: String,
  name: String,
  brand: String,
  series: String,
  length: String,
  diameter: String,
  linesize: String,
  strengthKg: String,
  strengthLbs: String,
colors: String,
flotation: String,
country: String,
  imgMain: String,
  alt: String,
})

const Line = model("lines", lineSchema);

module.exports = {
    Line,
}