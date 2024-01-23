const { Schema, model } = require("mongoose");

const reelSchema = new Schema({
  _id: Schema.Types.ObjectId,
  purpose: String,
  price: String,
  stock: Boolean,
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
});

const Reel = model("reel", reelSchema);

module.exports = {
  Reel,
};
