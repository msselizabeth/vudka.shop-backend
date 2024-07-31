
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const { Admin } = require("../models/admin");


const adminRegistration = async (req, res) => {
    const { name, password, role } = req.body;
    const admin = await Admin.findOne({ name });  
    if (admin) {
        throw HttpError(409, "Name has already been use.");
    }
    if (password.length < 6) {
        throw HttpError(409, "Password is invalid.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({ ...req.body, password: hashPassword }); 
   

    res.status(201).json({             
             name: newAdmin.name,
            messages: "Registeration success."
    })
}


module.exports = {
    adminRegistration,
};