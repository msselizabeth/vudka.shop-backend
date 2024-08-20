const { HttpError } = require("../helpers");
const { validate } = require("../middlewares");
const { Hook } = require("../models/hook");
const { Reel } = require("../models/reel");
const { Rod } = require("../models/rod");
const { StockEntry, stockJoiEntriesSchema, stockEntryJoiSchema } = require("../models/stockentry");

const models = {
  reels: Reel,
  rods: Rod,
  hooks: Hook,
};

// Добавление новых записей о поступлении
const addStockEntries = async (req, res) => {
  const { products } = req.body;

  // Валидация данных
  const { error } = stockEntryJoiSchema.validate({ products });
  if (error) {
    return res.status(400).json({ error: `Validation error: ${error.details[0].message}` });
  }


    // Обновление каждого товара в базе данных
    const updatedProducts = await Promise.all(products.map(async (entry) => {
      const { collectionName, productId, quantity, price } = entry;

      // Проверяем наличие модели для коллекции
      if (!models[collectionName]) {
        throw new Error(`Invalid collection name: ${collectionName}`);
      }

      // Находим товар по ID в соответствующей коллекции
      const product = await models[collectionName].findByIdAndUpdate(
        productId,
        {
          $inc: { stock: quantity }, // Увеличиваем количество товара на складе
          $set: { price: price }, // Обновляем цену товара
        },
        { new: true } // Возвращаем обновленный документ после обновления
      );

      if (!product) {
        throw new Error(`Product not found for ID: ${productId}`);
      }

      // Возвращаем обновленные данные для записи в документ поступления
      return {
        collectionName,
        productId: product._id,
        productName: `${product.name} ${product.brand} ${product.series} ${product.model}`,
        quantity,
        price,
        totallyStock: product.stock,
      };
    }));

    // Создаем документ поступления товаров
    const stockEntry = new StockEntry({
      products: updatedProducts,
      createdAt: new Date(),
    });

    await stockEntry.save();

    res.status(201).json({
      message: "The products stock has been successfully updated in the database.",
      stockEntry,
    });

};

module.exports = {addStockEntries};