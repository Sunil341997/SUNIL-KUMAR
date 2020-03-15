var fs = require('fs');
//meaning of utf8?
var readMe = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeMe', readMe);

