var http = require('http');
var fs = require('fs');
//meaning of __dirname?
//meaning of utf8?
var myReadStream = fs.createReadStream('Details.html', 'utf8');
//meaning of data here
var writeStearm = fs.createWriteStream('DataList.html');
myReadStream.on('data', function(chunk){
    console.log('New chunk received:');
    console.log(chunk);
    writeStearm.write(chunk);
});
