const { User } = require("../models/user");

const postPortrait = async (req, res) => {
    const user = req.user;
    if (!user) {
      throw HttpError(401, "User isn't authenticated");
    }

    const { portrait } = req.body;

    const portraitUser = await User.findByIdAndUpdate(user._id, { portrait }, { new: true });

    res.status(201).json(portraitUser);
}

module.exports = {
    postPortrait
}