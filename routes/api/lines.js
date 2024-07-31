const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getLines);
// router.get("/same", ctrl.getSameRods);
// router.get("/:rodId", ctrl.getOneRod);


module.exports = router;
