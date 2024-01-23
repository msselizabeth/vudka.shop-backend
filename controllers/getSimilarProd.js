const { Reel } = require("../models/reel");
const { Rod } = require("../models/rod");

const getSameRods = async (req, res) => {
    const { query } = req.query;
    const products = await Rod.find({series: query});
    res.json(products);
};

const getSameReels = async (req, res) => {
  const { query } = req.query;
  const products = await Reel.find({ series: query });
  res.json(products);
}

module.exports = {
  getSameRods,
  getSameReels
};
