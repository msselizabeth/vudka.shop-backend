const { controllerWrapper } = require("../helpers/ctrlWrapper");


const { getRods } = require("./getRods");
const { getOneRod } = require("./getOneRod");
const { getSilicones } = require("./getSilicones");
const { getOneSilicone } = require("./getOneSilicone");
const { getSameRods, getSameReels, getSameSilicones } = require("./getSimilarProd");
const { getReels } = require("./getReels");
const { getOneReel } = require("./getOneReel");
const { login } = require("./login");
const { registration } = require("./registration");
const { current } = require("./current");
const { logout } = require("./logout");
const { confirmEmail } = require("./confirm");
const { addOrder } = require("./addOrder");


module.exports = {
  login: controllerWrapper(login),
  registration: controllerWrapper(registration),
  current: controllerWrapper(current),
  logout: controllerWrapper(logout),
  confirm: controllerWrapper(confirmEmail),

  addOrder: controllerWrapper(addOrder),

  getRods: controllerWrapper(getRods),
  getOneRod: controllerWrapper(getOneRod),
  getSameRods: controllerWrapper(getSameRods),

  getReels: controllerWrapper(getReels),
  getOneReel: controllerWrapper(getOneReel),
  getSameReels: controllerWrapper(getSameReels),

  getSilicones: controllerWrapper(getSilicones),
  getOneSilicone: controllerWrapper(getOneSilicone),
  getSameSilicones: controllerWrapper(getSameSilicones),
};