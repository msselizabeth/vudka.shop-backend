const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const jsonParse = express.json();

router.post("/addOrder", jsonParse, ctrl.addOrder);


module.exports = router;
