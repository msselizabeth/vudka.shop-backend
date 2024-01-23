const { controllerWrapper } = require("../helpers/ctrlWrapper");


const { getRods } = require("./getRods");
const { getOneRod } = require("./getOneRod");
const { getSilicones } = require("./getSilicones");
const { getOneSilicone } = require("./getOneSilicone");
const { getSameRods, getSameReels } = require("./getSimilarProd");
const { getReels } = require("./getReels");
const { getOneReel } = require("./getOneReel");


module.exports = {
  getRods: controllerWrapper(getRods),
  getOneRod: controllerWrapper(getOneRod),
  getSameRods: controllerWrapper(getSameRods),

  getReels: controllerWrapper(getReels),
  getOneReel: controllerWrapper(getOneReel),
  getSameReels: controllerWrapper(getSameReels),

  getSilicones: controllerWrapper(getSilicones),
  getOneSilicone: controllerWrapper(getOneSilicone),
  
};