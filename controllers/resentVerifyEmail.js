const { HttpError } = require("../helpers");
const { User } = require("../models/user");
const { registrationMail } = require("../nodemailer");

const resentVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email not found")
    }
    if (user.verify) {
         throw HttpError(401, "Email has already verified");
    }
    const emailMessage = {
      to: email,
      html: `<p>Greetings, this is an automated email from Gastro Guide. Thank you for registering! Confirm your mail by clicking the link below.
            If the links are not active (they do not glow in blue), then move the letter from the spam folder to the main inbox and try to click on the link again.</p>
            <a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${user.verificationCode}">Confirm your email!</a>
            <br/>
            <br/>
            <p>Вітаю, це автоматичний лист від Gastro Guide.  Дякую, за реєстрацію! Підтвердьте свою пошту натиснувши за допомогою посилання нижче. 
            Якщо посилання не активні(не світяться синім кольором), то перемістіть лист з папки спам в основну скриньку та повторіть спробу натиснути на посиланн</p>
            <a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${user.verificationCode}">Підтвердити пошту!</a>`,
    };

    registrationMail(emailMessage).catch(console.error);

    res.status(201).json({
         message: "Verify email send"
     });
};

module.exports = {
    resentVerifyEmail,
}
