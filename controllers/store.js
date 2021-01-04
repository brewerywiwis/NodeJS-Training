const productModel = require("../models/product");

exports.getStorePage = async (req, res, next) => {
  res.render("./store/store", {
    productArray: await productModel.getAllProduct(),
  });
};
