const { controllerWrapper } = require("../helpers/ctrlWrapper");
const { addRod } = require("./addRoad");
const { deleteProductsByCollection } = require("./deleteProductByCollection");
const { getProductsByCollection } = require("./getProductsByCollection");
const { getRods } = require("./getRods");
const { addStockEntries } = require("./stockentry");


module.exports = {
    addRod: controllerWrapper(addRod),
    getRods: controllerWrapper(getRods),

    addStockEntries: controllerWrapper(addStockEntries),

    getProductsByCollection: controllerWrapper(getProductsByCollection),
    deleteProductsByCollection: controllerWrapper(deleteProductsByCollection),
}