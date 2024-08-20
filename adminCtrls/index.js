const { controllerWrapper } = require("../helpers/ctrlWrapper");
const { addRod } = require("./addRoad");
const { getProductsByCollection } = require("./getProductsByCollection");
const { getRods } = require("./getRods");
const { addStockEntries } = require("./stockentry");


module.exports = {
    addRod: controllerWrapper(addRod),
    getRods: controllerWrapper(getRods),

    addStockEntries: controllerWrapper(addStockEntries),

    getProductsByCollection: controllerWrapper(getProductsByCollection)
}