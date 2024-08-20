const { Hook } = require("../models/hook");
const { Reel } = require("../models/reel");
const { Rod } = require("../models/rod");


const models = {
    reels: Reel,
    rods: Rod,
    hooks: Hook,
};

module.exports = models;
  