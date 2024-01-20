const { controllerWrapper } = require("../helpers/ctrlWrapper");


const { getRods } = require("./getRods");
const { getOneRod } = require("./getOneRod");
const { getSilicones } = require("./getSilicones");
const { getOneSilicone } = require("./getOneSilicone");


module.exports = {
  getRods: controllerWrapper(getRods),
  getOneRod: controllerWrapper(getOneRod),
  getSilicones: controllerWrapper(getSilicones),
  getOneSilicone: controllerWrapper(getOneSilicone)
};