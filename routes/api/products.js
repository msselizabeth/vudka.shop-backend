const express = require("express");
const router = express.Router();
const ctrl = require("../../adminCtrls");
const adminAuth = require("../../middlewares/adminAuth");
const jsonParse = express.json();



router.get("/", ctrl.getProductsByCollection);
router.delete("/:collectionName/:productId", ctrl.deleteProductsByCollection)


module.exports = router;