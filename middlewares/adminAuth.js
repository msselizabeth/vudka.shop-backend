const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/admin");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const adminAuth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    if (!authorization) {
        return next(HttpError(401, "Authorization header is missing"));
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
        return next(HttpError(401, "Admin isn't authenticated"));
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const admin = await Admin.findById(id);
        if (!admin || !admin.token || admin.token !== token) {
            return next(HttpError(401, "Admin isn't authenticated"));
        }
        req.user = admin;
        next();
    } catch (error) {
        next(HttpError(401, `Admin isn't authenticated: ${error.message}`));
    }
};

module.exports = adminAuth;
