
var fs = require('fs');

var read = fs.readFileSync("app.js", "utf8");

console.log(read);

var write = fs.writeFileSync("write.txt", read);

console.log