const getDB = require("../utils/database").getDB;

const getAllProduct = async () => {
  const db = getDB();
  return db.collection("product").find({}).toArray();
};
exports.getStorePage = async (req, res, next) => {
  res.render("./store/store", { productArray: await getAllProduct() });
};
