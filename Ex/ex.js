var express = require('express');
var hw = express();
hw.get('/hellothere', function(req, res){
    res.send('Hello there, from express');
});
hw.listen(1338, function(){
    console.log('Listening at port 1338');

});