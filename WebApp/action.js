var sys = require('util');
    http = require('http');
    http.createServer(function (req, res) {
            switch (req.url) {
                case '/myaction':
                        res.end("Hello");
                    break;
            }
    }).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');