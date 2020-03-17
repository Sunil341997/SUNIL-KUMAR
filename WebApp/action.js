var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res){
    console.log('request was made: ' + req.url);
    //200 is status, 404, 500, 300
    //what is http status?
    //what is content-type?
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream('Details.html', 'utf8');
    myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('yo guys listening to port 3000');
