const axios = require("axios");
const { error } = require("console");

function success() {
  console.log("COMPLETE");
}

function unsuccess() {
  console.log("UNCOMPLETE");
}
// axios.get("https://www.google.com/search?q=axios").then(success, unsuccess);

// function getData() {
//   setTimeout(() => console.log("timer counted"), 2000);
//   return new Promise((resolve, reject) => {
//     resolve("promise success");
//     reject("promise unsuccess");
//   });
// }
// function print(value) {
//   console.log(value);
// }
// getData().then(print);
