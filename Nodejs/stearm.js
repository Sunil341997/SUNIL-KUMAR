var http = require('http');
var fs = require('fs');
//meaning of __dirname?
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
myReadStream.on('data', function(chunk){
    console.log('New chunk received:');
    console.log(chunk);
});
