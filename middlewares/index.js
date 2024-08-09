const adminAuth = require("./adminAuth");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
const { uploadRoads } = require("./uploadFiles");
const validate = require("./validate");

module.exports = {
    authenticate,
    adminAuth,
    isValidId,
    uploadRoads,
    validate
}