const { HttpError } = require("../../helpers");
const { validate } = require("../../middlewares");
const {Exchange, addExchangeJoiSchema} = require("../../models/exchange");


const addExchange = async (req, res) => { 

    const { error } = validate(req.body, addExchangeJoiSchema);
    if (error) {
        throw HttpError(400, error.details[0].message);
    }

    const { name, value, target } = req.body;

    if (!name || !value || !target) throw HttpError(400, "Name, value and target are required.");

    const existedExchange = await Exchange.findOne({ target });
    if (existedExchange) throw HttpError(400, "This exchange has been created.");

    const newExchange = await Exchange.create({ name, value, target });

    res.json({
        message: "Exchange was successfull created.",
        newExchange,
    })
};

module.exports = { addExchange };
