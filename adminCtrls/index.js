const { controllerWrapper } = require("../helpers/ctrlWrapper");
const { addRod } = require("./addRoad");
const { getRods } = require("./getRods");


module.exports = {
    addRod: controllerWrapper(addRod),
    getRods: controllerWrapper(getRods),
}