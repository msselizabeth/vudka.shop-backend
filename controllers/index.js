const { controllerWrapper } = require("../helpers/ctrlWrapper");


const { getRods } = require("./getRods");
const { getOneRod } = require("./getOneRod");
const { getSilicones } = require("./getSilicones");
const { getOneSilicone } = require("./getOneSilicone");
const { getSameRods, getSameReels, getSameSilicones, getSameHooks } = require("./getSimilarProd");
const { getReels } = require("./getReels");
const { getOneReel } = require("./getOneReel");
const { login } = require("./login");
const { registration } = require("./registration");
const { current } = require("./current");
const { logout } = require("./logout");
const { confirmEmail } = require("./confirm");
const { addOrder } = require("./addOrder");
const { getHooks } = require("./getHooks");
const { getOneHook } = require("./getOneHook");
const { getLines } = require("./getLines");
const { adminRegistration } = require("./adminRegistration");
const { adminLogin } = require("./adminLogin");
const { adminCurrent } = require("./adminCurrent");
const { adminLogout } = require("./adminLogout");


module.exports = {
  adminRegistration: controllerWrapper(adminRegistration),
  adminLogin: controllerWrapper(adminLogin),
  adminCurrent: controllerWrapper(adminCurrent),
  adminLogout: controllerWrapper(adminLogout),


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

  getHooks: controllerWrapper(getHooks),
  getOneHook: controllerWrapper(getOneHook),
  getSameHooks: controllerWrapper(getSameHooks),

  getLines: controllerWrapper(getLines),
};