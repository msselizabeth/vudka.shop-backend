const { Silicone } = require("../models/silicone");

const getSilicones = async (req, res) => {
  const { page = 1, limit = 20, query } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Silicone.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);

  const silicones = await Silicone.find({}, "", { skip, limit });
  const result = silicones.map((silicone) => ({
    _id: silicone._id,
    price: silicone.price,
    stock: silicone.stock,
    name: silicone.name,
    brand: silicone.brand,
    series: silicone.series,
    model: silicone.model,
    size: silicone.size,
    weight: silicone.weight,
    lurestype: silicone.lurestype,
    imgMain: silicone.imgMain,
    alt: silicone.alt,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
  getSilicones,
};
