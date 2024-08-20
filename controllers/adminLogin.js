
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/admin");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const adminLogin = async (req, res) => {
    const { name, password } = req.body;
    const admin = await Admin.findOne({ name });
     if (!admin) {
       throw HttpError(401, "Email or password invalid");
     }
     const passwordCompare = await bcrypt.compare(password, admin.password);
     if (!passwordCompare) {
       throw HttpError(401, "Email or password invalid");
     }
  
    
     const payload = {
        id: admin._id,
      }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
  await Admin.findByIdAndUpdate(admin._id, { token });
    
  res.json({
    message: "Login success",
    admin: {
      admin: admin.name,
    },
    token
  });
};



module.exports = {
  adminLogin,
};
