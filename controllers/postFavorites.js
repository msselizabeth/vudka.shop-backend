const { User } = require("../models/user");

const postFavorites = async (req, res) => {
    const user = req.user;
    const { recipeId } = req.body;
    
    const userId = await User.findOne({ _id: user._id });
      if (!userId) {
        return res.status(404).json({ error: "User isn't found" });
      }
      if (userId.favorites.includes(recipeId)) {
        return res
          .status(400)
          .json({ error: "The recipe has already added" });
      }
      userId.favorites.push(recipeId);
      await userId.save();

      res.json({ userId });

};

module.exports = {
   postFavorites,
};