const { Schema, model } = require("mongoose");

const reelSchema = new Schema({
  render: { type: Boolean, required: true },
  purpose: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  salePriceMain: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  description: [
    {
      text: {
        type: String,
        default: "Опис для товару тимчасово відсутній",
      },
    },
  ],
  typereel: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  spoolSize: {
    type: String,
    required: true,
  },
  lineCapacity: {
    type: String,
    required: true,
  },
  lineRetrieve: {
    type: String,
    required: true,
  },
  gearRatio: {
    type: String,
    required: true,
  },
  dragMax: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  dragSys: {
    type: String,
    required: true,
  },
  brakeSys: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
  ballBearing: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "",
  },
  img: [String],
  alt: {
    type: String,
    required: true,
  },
  promotion: {
    type: Boolean,
    default: false,
  },
  promotionStartDate: {
    type: Date,
    default: null,
  },
  promotionEndDate: {
    type: Date,
    default: null,
  },
  discount: {
    type: String,
    default: "",
  },
});

const Reel = model("reel", reelSchema);

module.exports = {
  Reel,
};
