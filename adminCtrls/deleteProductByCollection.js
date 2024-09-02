const { models } = require("../hand-data/models");
const { HttpError } = require("../helpers");

const deleteProductsByCollection = async (req, res) => {
    const { collectionName, productId } = req.params;

  if (!models[collectionName])
    throw HttpError(400, `Invalid collection name: ${collectionName}`);

    const deletedProduct = await models[collectionName].findByIdAndDelete(productId);

    if (!deletedProduct) {
        throw HttpError(404, `Product ID: ${productId} or collection name ia incorrect.`);
      }
    
    
  res.status(200).json({ message: `Product with ID: ${productId} was successfully deleted.`});
};

module.exports = { deleteProductsByCollection };
