const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const adminAuth = require("../../middlewares/adminAuth");

const jsonParse = express.json();

router.post("/registration", jsonParse, ctrl.adminRegistration);
router.post("/login", jsonParse, ctrl.adminLogin);
router.get("/current", jsonParse, adminAuth, ctrl.adminCurrent);
router.post("/logout", jsonParse, adminAuth, ctrl.adminLogout);

module.exports = router;