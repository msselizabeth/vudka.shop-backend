const { Line } = require("../models/line");

const getLines = async (req, res) => {
  const { page = 1, limit = 20, query } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Line.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
  const lines = await Line.find({ purpose: query }, "", { skip, limit });
  const result = lines.map((line) => ({
    _id: line._id,
    render: line.render,
    purpose: line.purpose,
    priceMain: line.priceMain,
    sale: line.sale,
    salePriceMain: line.salePriceMain,
    stock: line.stock,
    item: line.item,
    length: line.length,
    diameter: line.diameter,
    linesize: line.linesize,
    colors: line.colors,
    flotation: line.flotation,
    name: line.name,
    brand: line.brand,
    series: line.series,
    imgMain: line.imgMain,
    alt: line.alt,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
  getLines,
};
