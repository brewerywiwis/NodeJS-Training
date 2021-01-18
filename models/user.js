const getDB = require("../utils/database").getDB;

const getUserByUsername = (username) => {
  const db = getDB();
  return db.collection("User").findOne({ Username: username });
};

exports.createUser = (username, password) => {
  return new Promise((succ, fail) => {
    getUserByUsername(username).toArray((err, resultArray) => {
      if (resultArray.length === 0) {
        const db = getDB();
        db.collection("User")
          .insertOne({
            Username: username,
            Password: password,
          })
          .then((result) => {
            succ();
          })
          .catch(() => {
            fail();
          });
      } else {
        fail();
      }
    });
  });
};

exports.getUserByUsername = getUserByUsername;
