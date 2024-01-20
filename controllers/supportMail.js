const { HttpError } = require("../helpers");
const { supportMail } = require("../nodemailer");

const supportHelpMail = async (req, res) => {
    const { email, message } = req.body;
    
    if (!email || !message) {
        throw HttpError(400, "Email or message doesn't exist")
    }

  supportMail(email, message).catch(console.error);

  res.status(201).json({
    message: "Support email send",
  });
};

module.exports = {
    supportHelpMail
}
