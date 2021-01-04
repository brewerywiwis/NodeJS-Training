const getDB = require("../utils/database").getDB;

const getAllProduct = async () => {
  const db = getDB();
  return db.collection("product").find({}).toArray();
};

exports.getAllProduct = getAllProduct;
