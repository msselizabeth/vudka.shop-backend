const express = require("express");
const router = express.Router();
const ctrl = require("../../adminCtrls");
const adminAuth = require("../../middlewares/adminAuth");
const jsonParse = express.json();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadFields = upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'modelImages', maxCount: 10 }
]);

router.get("/", ctrl.getRods);
router.post("/",jsonParse,  uploadFields  , ctrl.addRod);


module.exports = router;