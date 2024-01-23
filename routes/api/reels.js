const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getReels);
router.get("/same", ctrl.getSameReels);
router.get("/:reelId", ctrl.getOneReel);

module.exports = router;
