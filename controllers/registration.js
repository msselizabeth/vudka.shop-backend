const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const { registrationMail } = require("../nodemailer");
const { nanoid } = require("nanoid");
const { valid } = require("joi");


const registration = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });  
    if (user) {
        throw HttpError(409, "Email has already been use.");
    }
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (!isValidEmail(email)) {
        throw HttpError(409, "Email is invalid.");
    }


    const hashPassword = await bcrypt.hash(password, 10);
    const verificationCode = nanoid();
    const emailMessage = {
      to: email,
      html: `
            <p>Greetings, this is an automated email from Gastro Guide. Thank you for registering! Confirm your mail by clicking the link below.
            If the links are not active (they do not glow in blue), then move the letter from the spam folder to the main inbox and try to click on the link again.</p>
            <a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${verificationCode}">Confirm your email!</a>
            <br/>
            <br/>
            <p>Вітаю, це автоматичний лист від Gastro Guide.  Дякую, за реєстрацію! Підтвердьте свою пошту натиснувши за допомогою посилання нижче. 
            Якщо посилання не активні(не світяться синім кольором), то перемістіть лист з папки спам в основну скриньку та повторіть спробу натиснути на посиланн</p>
            <a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${verificationCode}">Підтвердити пошту!</a>`,
    };
    const newUser = await User.create({ ...req.body, password: hashPassword, verificationCode }); 
   
    registrationMail(emailMessage).catch(console.error);
    res.status(201).json({      
            email: newUser.email,        
             name: newUser.userName,
            messages: "register succses"
    })
}

// const registrationEN = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email has already been use.");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);
//   const newUser = await User.create({ ...req.body, password: hashPassword });
//   res.status(201).json({
//     email: newUser.email,
//     name: newUser.userName,
//   });
// };

module.exports = {
    registration,
};