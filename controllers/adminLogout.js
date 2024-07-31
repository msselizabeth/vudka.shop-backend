const { Admin } = require("../models/admin");

const adminLogout = async (req, res) => {
    const { _id } = req.user;
    await Admin.findByIdAndUpdate(_id, { token: "" });

    res.json({message: "Logout success"})
}

module.exports = {
    adminLogout
}