const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const { Rod } = require("../models/rod");
const { Reel } = require("../models/reel");

// let models = {};

// function toCamelCase(str) {
//     return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
// }

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// async function initializeModels() {
//     try {
//         // Получаем список всех коллекций в базе данных
//         const collections = await mongoose.connection.db.listCollections().toArray();

//         collections.forEach(collection => {
//             const collectionName = collection.name;
//             const modelName = capitalize(toCamelCase(collectionName));

//             try {
//                 // Подключаем модель на основе имени коллекции
//                 const model = require(path.resolve(__dirname, `../models/${modelName}`));
//                 models[collectionName] = model[modelName];
//             } catch (error) {
//                 console.error(`Failed to load model for collection ${collectionName}:`, error);
//             }
//         });
//     } catch (error) {
//         console.error('Failed to initialize models:', error);
//     }
// }

// module.exports = { models, initializeModels };

const models = {
  rods: Rod,
  reels: Reel,
};

module.exports = { models };
