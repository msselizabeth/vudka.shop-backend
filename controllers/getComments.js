const { Comment } = require("../models/comment");
const { HttpError } = require("../helpers");

const getComments = async (req, res) => {
  const { recipeId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Comment.countDocuments({ recipe: recipeId });
  const totalPages = Math.ceil(totalCount / limit); 
  const comments = await Comment.find({ recipe: recipeId }, '', { skip, limit }).populate(
    "author",
    "userName email createdAt"
  );
  const sortedComments = comments.sort((a, b) => b.createdAt - a.createdAt);

  res.status(200).json({
    sortedComments,
    totalPages,
    currentPage: page
  });
};

module.exports = {
    getComments,
}