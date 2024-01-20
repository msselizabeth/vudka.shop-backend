const { Rod } = require("../models/rod");


const getRods = async (req, res) => {
  const { page = 1, limit = 20 , query} = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Rod.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
// purpose: query;
  const rods = await Rod.find({ purpose: query }, "", { skip, limit });
  const result = rods.map((rod) => ({
    _id: rod._id,
    purpose: rod.purpose,
    typerods: rod.typerods,
    price: rod.price,
    stock: rod.stock,
    name: rod.name,
    brand: rod.brand,
    series: rod.series,
    model: rod.model,
    item: rod.item,
    testMin: rod.testMin,
    testMax: rod.testMax,
    testLb: rod.testLb,
    rodSize: rod.rodSize,
    action: rod.action,
    section: rod.section,
    img: rod.img,
    alt: rod.alt,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
    getRods,
}