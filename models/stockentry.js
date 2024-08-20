const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema({
  collectionName: {
    type: String,
    required: true,
    enum: ["reels", "rods", "hooks", "siliconelures"], // Ограничение на доступные коллекции
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Убедиться, что количество положительное
  },
  price: {
    type: String,
  },
  totallyStock: {
    type: Number,
    required: true,
  },
});

const stockEntrySchema = new Schema({
  products: [productSchema], // Массив товаров
  createdAt: {
    type: Date,
    default: Date.now, // Дата создания документа
  },
});

const productJoiSchema = Joi.object({
  collectionName: Joi.string()
    .valid("reels", "rods", "hooks", "siliconelures")
    .required(), // Ограничение на доступные коллекции
  productId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(), // Валидация ObjectId
  productName: Joi.string().optional(), // Название товара обязательно
  quantity: Joi.number().integer().min(1).required(), // Количество должно быть положительным числом
  price: Joi.string().optional(), // Цена обязательно
  totallyStock: Joi.number().integer().optional(), // Общее количество на складе после поступления обязательно
});

const stockEntryJoiSchema = Joi.object({
  products: Joi.array().items(productJoiSchema).min(1).required(), // Массив товаров должен содержать хотя бы один продукт
  createdAt: Joi.date().optional(), // Дата создания, необязательная
});

const StockEntry = model("StockEntry", stockEntrySchema);

module.exports = { StockEntry, productJoiSchema, stockEntryJoiSchema };
