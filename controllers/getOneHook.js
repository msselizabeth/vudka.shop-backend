const { Hook } = require("../models/hook");

const getOneHook = async (req, res) => {
  const { hookId } = req.params;
  const product = await Hook.findById(hookId);
  res.json(product);
};

module.exports = {
  getOneHook,
};
