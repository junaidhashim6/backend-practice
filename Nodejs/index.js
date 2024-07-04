const fs = require("fs");

// fs.writeFile("message.txt", "Hello from file system", (err) => {
//   if (err) throw err;
//   console.log("this file has saved");
// });

// fs.readFile(
//   "./message.txt",
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );
var generateName = require("sillyname");
var sillyName = generateName();
console.log(`My name is ${sillyName}`);
