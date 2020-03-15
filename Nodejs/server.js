var http = require('http');

var server = http.createServer(function (req, res){
    console.log('request was made: ' + req.url);
    //200 is status
    //what is status?
    //what is content-type?
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end('Hey guys');
});
server.listen (3000, '127.0.0.1');
console.log('yo guys listening to port 3000');
