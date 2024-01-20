// controllers/authController.js
const { User } = require("../models/user");
const path = require("path");

const confirmEmail = async (req, res) => {
  const { code } = req.params;

  // Найти пользователя по токену
  const user = await User.findOneAndUpdate(
    { verificationCode: code, verify: false },
    { $set: { verify: true, verificationCode: null } }
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired email." });
  }
  // Отправка HTML-страницы с благодарностью за регистрацию
  res.sendFile(path.join(__dirname, "../verify/confirm.html"));
};

module.exports = { confirmEmail };
