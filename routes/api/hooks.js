const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getHooks);
router.get("/same", ctrl.getSameHooks);
router.get("/:hookId", ctrl.getOneHook);

module.exports = router;
