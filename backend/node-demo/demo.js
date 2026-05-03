const fs = require("fs");

const content = "Belajar Node.js itu gampang!";


fs.writeFile("message.txt", content, (err) => {
  if (err) {
    console.log("Terjadi error:", err);
  } else {
    console.log("File berhasil dibuat!");
  }
});