const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.end('Hola mundo Server!');
})

server.listen(3000)