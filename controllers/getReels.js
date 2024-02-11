const { Reel } = require("../models/reel");

const getReels = async (req, res) => {
  const { page = 1, limit = 20, query } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Reel.countDocuments();
  const totalPages = Math.ceil(totalCount / limit);
  const reels = await Reel.find({ purpose: query }, "", { skip, limit });
  const result = reels.map((reel) => ({
    _id: reel._id,
    render: reel.render,
    sale: reel.sale,
    salePriceMain: reel.salePriceMain,
    purpose: reel.purpose,
    typereel: reel.typereel,
    price: reel.price,
    stock: reel.stock,
    name: reel.name,
    brand: reel.brand,
    series: reel.series,
    model: reel.model,
    item: reel.item,
    spoolSize: reel.spoolSize,
    dragMax: reel.dragMax,
    dragSys: reel.dragSys,
    ballBearing: reel.ballBearing,
    img: reel.img,
    alt: reel.alt,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
};

module.exports = {
  getReels,
};
