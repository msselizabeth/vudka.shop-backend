const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const params = req.params;

  for (key in params) {
    const id = params[key];
    if (!isValidObjectId(id)) {
      next(HttpError(400, `${id} is not valid id`));
    }
  }

  next();
};

module.exports = isValidId;
