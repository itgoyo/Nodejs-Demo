var http = require('http')


var server = http.createServer()

server.on('request', function () {

    console.log("server recive")

})

server.listen(3000, function () {
    console.log("服务器启动成功")
})


