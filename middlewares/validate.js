const validate = (object, schema) => {
    return schema.validate(object);
};

module.exports = validate;