const { controllerWrapper } = require("../helpers/ctrlWrapper");


const { getRods } = require("./getRods");
const { getOneRod } = require("./getOneRod");
const { getSilicones } = require("./getSilicones");
const { getOneSilicone } = require("./getOneSilicone");
const { getSameRods, getSameReels } = require("./getSimilarProd");
const { getReels } = require("./getReels");
const { getOneReel } = require("./getOneReel");
const { login } = require("./login");
const { registration } = require("./registration");
const { current } = require("./current");
const { logout } = require("./logout");
const { confirmEmail } = require("./confirm");


module.exports = {
  login: controllerWrapper(login),
  registration: controllerWrapper(registration),
  current: controllerWrapper(current),
  logout: controllerWrapper(logout),
  confirm: controllerWrapper(confirmEmail),

  getRods: controllerWrapper(getRods),
  getOneRod: controllerWrapper(getOneRod),
  getSameRods: controllerWrapper(getSameRods),

  getReels: controllerWrapper(getReels),
  getOneReel: controllerWrapper(getOneReel),
  getSameReels: controllerWrapper(getSameReels),

  getSilicones: controllerWrapper(getSilicones),
  getOneSilicone: controllerWrapper(getOneSilicone),
};