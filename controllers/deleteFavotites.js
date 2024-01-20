const { User } = require("../models/user");

const deleteFavorites = async (req, res) => {
  const user = req.user;
  const { recipeId } = req.body;

  const userId = await User.findOne({ _id: user._id });
  if (!userId) {
    return res.status(404).json({ error: "User isn't found" });
  }
 const recipeIndex = userId.favorites.indexOf(recipeId);
  if (recipeIndex === -1) {
  return res
    .status(404)
    .json({ error: "The recipe isn't found." });
 }

// Видалення рецепту зі списку улюблених
  userId.favorites.splice(recipeIndex, 1);
  await userId.save();

  res.json({ userId });
};

module.exports = {
  deleteFavorites,
};
