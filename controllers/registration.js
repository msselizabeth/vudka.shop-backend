const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const { registrationMail } = require("../nodemailer");
const { nanoid } = require("nanoid");



const registration = async (req, res) => {
    const { email, password, phone } = req.body;
    const user = await User.findOne({ email });  
    if (user) {
        throw HttpError(409, "Email has already been use.");
    }
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    function isValidPhone(phone) {
        const ukrainePhoneRegex =
            /^(?:\+38)?(?:\(\d{3}\)|\d{3})(?:[ -]?)\d{2,3}(?:[ -]?)\d{2}(?:[ -]?)\d{2}$/;
        return ukrainePhoneRegex.test(phone)
    }
    if (!isValidEmail(email)) {
        throw HttpError(409, "Email is invalid.");
    }
    if (!isValidPhone(phone)) {
        throw HttpError(409, "Phone is invalid.");
    }


    const hashPassword = await bcrypt.hash(password, 10);
    const verificationCode = nanoid();
    const emailMessage = {
      to: email,
      html: ` <p>Вітаємо, це автоматичний лист від Vudka.shop.  Дякуємо, за реєстрацію! Підтвердьте свою пошту натиснувши за допомогою посилання нижче. 
            Якщо посилання не активні(не світяться синім кольором), то перемістіть лист з папки спам в основну скриньку та повторіть спробу натиснути на посилання</p>
            <a target="_blank" href="https://vudka-shop-backend.onrender.com/api/auth/verify/${verificationCode}">Підтвердити пошту!</a>`,
    };
    const newUser = await User.create({ ...req.body, password: hashPassword, verificationCode }); 
   
    registrationMail(emailMessage).catch(console.error);
    res.status(201).json({      
            email: newUser.email,        
             name: newUser.userName,
            messages: "register succses"
    })
}


module.exports = {
    registration,
};