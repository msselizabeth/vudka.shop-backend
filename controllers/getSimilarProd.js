const { Hook } = require("../models/hook");
const { Reel } = require("../models/reel");
const { Rod } = require("../models/rod");
const { Silicone } = require("../models/silicone");

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

const getSameSilicones = async (req, res) => {
  const { query } = req.query;
  const products = await Silicone.find({ series: query });
  res.json(products);
};

const getSameHooks = async (req, res) => {
  const { query } = req.query;
  const products = await Hook.find({ series: query });
  res.json(products);
};

module.exports = {
  getSameRods,
  getSameReels,
  getSameSilicones,
  getSameHooks
};
