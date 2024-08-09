const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const adminAuth = require("../../middlewares/adminAuth");

const jsonParse = express.json();

router.get("/", jsonParse, ctrl.getExchange);
router.patch("/", jsonParse, adminAuth, ctrl.updateExchange);
router.post("/", jsonParse, adminAuth, ctrl.addExchange);

router.put("/promotion-mode", jsonParse, adminAuth, ctrl.promotionMode);

module.exports = router;