var http = require('http');
var fs = require('fs');
var url = require('url');
//meaning of __dirname?
//meaning of utf8?
http.createServer(function (req, res){
    if (req.url === "/form"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("Details.html", "UTF-8").pipe(res);
    }
    if (req.method === "GET"){
        console.log("Get Method Used");
        var parse = url.parse(req.url, true);
        console.log(parse);
    }
}).listen(3000);
//meaning of data here

