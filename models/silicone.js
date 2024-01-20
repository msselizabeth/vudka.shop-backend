const { Schema, model } = require("mongoose");

const siliconeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  purpose: String,
  price: String,
  stock: Boolean,
  description: [
    {
      text: String,
    },
  ],
  name: String,
  brand: String,
  series: String,
  model: String,
  size: String,
  weight: String,
  lurestype: String,
  amount: String,
  colors: [
    {
          stock: Boolean,
      item: String,  
      colorNumber: String,
          color: String,
          img: String,
    },
  ],
  imgMain: String,
  country: String,
  alt: String,
});

const Silicone = model("siliconelures", siliconeSchema);

module.exports = {
  Silicone,
};
