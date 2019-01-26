var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    console.log("hello itgoyo")
    // res.write("lalalal")

    // res.end()

    //res.end("mkosto")

    var url = req.url

    if (url === '/') {
        res.end('index page')
    } else if (url === '/login') {

        res.end('login page')
    } else {
        res.end("404 no fund")
    }

    //根据不同的请求路径发送不同的响应结果
    // 1、获取请求路径

    // 2、判断路径做出相应

})

server.listen(3000)