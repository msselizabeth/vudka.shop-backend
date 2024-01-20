const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "gastroguide@ukr.net",
    pass: META_PASSWORD,
  },
});

async function registrationMail(emailMessage) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "gastroguide@ukr.net", // sender address
    to: emailMessage.to, // list of receivers
    subject: "Verify email -- Gastro Guide", // Subject line
    text: "Hello, dear user! Please, verificate", // plain text body
    html: emailMessage.html,
  });
}

async function supportMail(user, message) {
    await transporter.sendMail({
      from: "gastroguide@ukr.net",
      to: "gastroguide@ukr.net",
      subject: "Support Mail",
        html: `<p>From: ${user}</p>
      <p>Problem: ${message}</p>`
    });
    
}
module.exports = {
    registrationMail,
    supportMail
}