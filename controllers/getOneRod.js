const { Rod } = require("../models/rod");


const getOneRod = async (req, res) => {
  const { rodId } = req.params;
  const product = await Rod.findById(rodId);
  res.json(product);
};

module.exports = {
  getOneRod,
};