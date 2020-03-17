var express = require('express');
var express = express();
var fs = require('fs');
var readFile = fs.readFile('SampleData.xlsx', {cellDates:true});
express.get('/hellothere', function(req, res){
    res.send('DataList.html', {root: __dirname});
});
hw.listen(1338, function(){
    console.log('Listening at port 1338');

});