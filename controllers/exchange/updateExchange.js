const { HttpError } = require("../../helpers");
const { validate } = require("../../middlewares");
const {Exchange, updateExchangeJoiSchema} = require("../../models/exchange");


const updateExchange = async (req, res) => { 

    const { error } = validate(req.body, updateExchangeJoiSchema);
    if (error) {
        throw HttpError(400, error.details[0].message);
    }

    const { value, target } = req.body;

    if (!value || !target) {
      throw new HttpError(400, "Params 'value' & 'target' are required.");
    }

    const existedExchange = await Exchange.findOne({ target });
    if (!existedExchange) throw HttpError(404, "Not found");

    const updatedExchange = await Exchange.findOneAndUpdate({ target }, { value }, { new: true });

    if (!updatedExchange) {
        throw new HttpError(500, "Failed to update exchange");
      }

    res.json({
        message: "Exchange was successfull updated.",
        updatedExchange,
    })
};

module.exports = { updateExchange };
