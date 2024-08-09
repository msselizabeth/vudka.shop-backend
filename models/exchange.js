const Joi = require("joi");
const mongoose = require("mongoose");

const exchangeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addExchangeJoiSchema = Joi.object({
  name: Joi.string().required(),
  value: Joi.string().required(),
  target: Joi.string().required(),
});

const updateExchangeJoiSchema = Joi.object({
  value: Joi.string().required(),
  target: Joi.string().required(),
});

const Exchange = mongoose.model("exchange", exchangeSchema);

module.exports = { Exchange, addExchangeJoiSchema, updateExchangeJoiSchema };
