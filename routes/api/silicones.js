const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getSilicones);
router.get("/:siliconeId", ctrl.getOneSilicone);

module.exports = router;
