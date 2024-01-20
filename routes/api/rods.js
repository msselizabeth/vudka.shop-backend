const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getRods);
router.get("/:rodId", ctrl.getOneRod);


module.exports = router;
