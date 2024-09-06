const {models} = require("../hand-data/models");
const { HttpError } = require("../helpers");

const getProductsByCollection = async (req, res) => {
  const { page = 1, limit = 3, search = "" } = req.query;
  const { collectionName } = req.params;
  const searchRegex = new RegExp(search.replace(/\s+/g, ""), "i");

  const searchCriteria = {
    $or: [
      { name: searchRegex },
      { brand: searchRegex },
      { series: searchRegex },
      { model: searchRegex },
      { item: searchRegex },
      { code: searchRegex },
      {
        $expr: {
          $regexMatch: {
            input: {
              $replaceAll: {
                input: { $concat: ["$name", "$brand", "$series", "$model"] },
                find: " ",
                replacement: "",
              },
            },
            regex: searchRegex,
          },
        },
      },
    ],
  };

  // Проверка на наличие модели для указанной коллекции
  if (!models[collectionName])
    throw HttpError(400, `Invalid collection name: ${collectionName}`);

  const products = await models[collectionName]
    .find(searchCriteria)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const totalProducts = await models[collectionName].countDocuments(
    searchCriteria
  );

  res
    .status(200)
    .json({
      success: true,
      products: products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    });
};

module.exports = { getProductsByCollection };
