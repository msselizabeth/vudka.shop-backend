const { Schema, model } = require("mongoose");

const reelSchema = new Schema({
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
  typereel: String,
  name: String,
  brand: String,
  series: String,
  model: String,
  item: String,
  spoolSize: String,
  lineCapacity: String,
  lineRetrieve: String,
  gearRatio: String,
  dragMax: String,
  weight: String,
  dragSys: String,
  brakeSys: String,
  handle: String,
  ballBearing: String,
  country: String,
  img: [String],
  alt: String,
  promotion: {
    type: Boolean,
      default: false,
    },
  promotionStartDate: Date, // Дата начала акции
  promotionEndDate: Date,
});

const Reel = model("reel", reelSchema);

module.exports = {
  Reel,
};
