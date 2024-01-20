const { Comment } = require("../models/comment");
const { HttpError } = require("../helpers");

const postComment = async (req, res) => {
    const user = req.user;
    if (!user) {
        throw HttpError(401, "User isn't authenticated");
    }
    const { text, recipe } = req.body;
    const comment = new Comment({
        text,
        author: user.id,
        recipe,
    })
    await comment.save();
    res.status(201).json(comment);
}

module.exports = {
    postComment,
}