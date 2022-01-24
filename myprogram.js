var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let content = 'Web content with node.js'
    res.end(content);
}).listen(8080);