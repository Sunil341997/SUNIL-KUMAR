var fs = require('fs');

var readMe = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeMe', readMe);

