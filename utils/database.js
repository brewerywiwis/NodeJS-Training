const mongo = require("mongodb");

const MongoClient = mongo.MongoClient(
  "mongodb+srv://brew:1234@cluster0.uea93.mongodb.net/test",
  { useUnifiedTopology: true }
);
let _db;

const MongoConnect = (callback) => {
  MongoClient.connect()
    .then((client) => {
      console.log("DB connected");
      _db = client.db("store");
      //   console.log(_db);
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  } else {
    throw "No DB connected";
  }
};

exports.MongoConnect = MongoConnect;
exports.getDB = getDB;
