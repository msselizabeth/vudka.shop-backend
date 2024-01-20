const { Silicone } = require("../models/silicone");

const getOneSilicone = async (req, res) => {
  const { siliconeId } = req.params;
  const product = await Silicone.findById(siliconeId);
  res.json(product);
};

module.exports = {
  getOneSilicone,
};
