var fs = require('fs')

fs.mkdir("mkdirfile", function () {
    fs.readFile('readfile.js', "utf8", function (err, data) {
        fs.writeFile("./mkdirfile/write.txt", data, function () {
            console.log("copy finish");
        })
    })
})