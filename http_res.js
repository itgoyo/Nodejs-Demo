var http = require('http')


var server = http.createServer()

server.on('request', function (req, res) {

    console.log(req.url)

    // response 有一个write方法，但是写完了之后记得end，不然就会一直在等待
    res.write("hello ")
    res.write("world ")
    res.write("world ")
    res.end()
    console.log("server recive")

})

server.listen(3000, function () {
    console.log("服务器启动成功")
})


