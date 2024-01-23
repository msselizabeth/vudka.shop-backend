const { Reel } = require("../models/reel");

const getOneReel = async (req, res) => {
  const { reelId } = req.params;
  const product = await Reel.findById(reelId);
  res.json(product);
};

module.exports = {
  getOneReel,
};
