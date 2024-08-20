const models = require("../hand-data/models");

const getProductsByCollection = async (req, res) => {
  const { collectionName, search = "" } = req.query;
    const searchRegex = new RegExp(search.replace(/\s+/g, ""), "i");
    
    console.log(collectionName)

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
  if (!models[collectionName]) {
    return res
      .status(400)
      .json({ error: `Invalid collection name: ${collectionName}` });
  }

  const products = await models[collectionName].find(searchCriteria);

  res.status(200).json({ products });
};

module.exports = { getProductsByCollection };
