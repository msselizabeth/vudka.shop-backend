
const { HttpError } = require("../../helpers");
const { Exchange } = require("../../models/exchange");

const getExchange = async (req, res) => {
  const { target } = req.query;

  if (!target) {
    throw new HttpError(400, "Params 'target' is required.");
  }

  const exchange = await Exchange.findOne({ target });
  if (!exchange) throw HttpError(404, "Not found");

  res.json({
    exchange,
  });
};

module.exports = { getExchange };
