const { Hook } = require("../models/hook");

const getHooks = async (req, res) => {
  const { page = 1, limit = 20, query } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Hook.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
  const hooks = await Hook.find({}, "", { skip, limit });
  const result = hooks.map((hook) => ({
    _id: hook._id,
    render: hook.render,
    purpose: hook.purpose,
    typehooks: hook.typehooks,
    priceMain: hook.priceMain,
    sale: hook.sale,
    salePriceMain: hook.salePriceMain,
    stock: hook.stock,
    name: hook.name,
    brand: hook.brand,
    series: hook.series,
    imgMain: hook.imgMain,
    alt: hook.alt,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
  getHooks,
};
