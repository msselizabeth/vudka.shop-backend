const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");
const jsonParse = express.json();

// router.post("/login", jsonParse, ctrl.login);
router.post("/registration", jsonParse, ctrl.registration);
router.get("/current", authenticate, jsonParse, ctrl.current);
// router.post("/logout", authenticate, jsonParse, ctrl.logout);
router.get("/verify/:code", jsonParse, ctrl.confirm);

module.exports = router;
