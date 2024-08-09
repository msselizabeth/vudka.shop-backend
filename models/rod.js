const { required } = require("joi");
const { Schema, model } = require("mongoose");
const Joi = require("joi");

const rodSchema = new Schema({
  render: {
    type: Boolean,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  priceMain: {
    type: String,
    required: true,
  },
  stock: {
    type: Boolean,
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
  typerods: {
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
  testMin: {
    type: String,
    default: "",
  },
  testMax: {
    type: String,
    default: "",
  },
  testLb: {
    type: String,
    default: "",
  },
  rodSize: {
    type: String,
    default: "",
  },
  transSize: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    default: "",
  },
  action: {
    type: String,
    required: true,
  },
  rodClass: {
    type: String,
    default: "",
  },
  design: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  guideType: {
    type: String,
    default: "",
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
});

const addRodJoiSchema = Joi.object({
  render: Joi.boolean().required(),
  purpose: Joi.string().required(),
  priceMain: Joi.string().required(),
  stock: Joi.boolean().required(),
  sale: Joi.boolean().default(false),
  promotion: Joi.boolean().default(false),
  salePriceMain: Joi.string().default(""),
  dicount: Joi.string().default(""),
  code: Joi.string().default(""),
  description: Joi.array().items(
    Joi.object({
      text: Joi.string().default("Опис для товару тимчасово відсутній"),
    })
  ),
  typerods: Joi.string().required(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  series: Joi.string().required(),
  model: Joi.string().required(),
  item: Joi.string().required(),
  testMin: Joi.string().default(""),
  testMax: Joi.string().default(""),
  testLb: Joi.string().default(""),
  rodSize: Joi.string().default(""),
  transSize: Joi.string().default(""),
  weight: Joi.string().default(""),
  action: Joi.string().required(),
  rodClass: Joi.string().default(""),
  design: Joi.string().required(),
  section: Joi.string().required(),
  guideType: Joi.string().default(""),
  country: Joi.string().default(""),
  img: Joi.array().items(Joi.string()),
  alt: Joi.string().required(),
  promotionStartDate: Joi.date().default(null),
  promotionEndDate: Joi.date().default(null),
});

const Rod = model("rod", rodSchema);

module.exports = {
  Rod,
  addRodJoiSchema,
};
