var moment = require("moment");
var uniq = require("uniq");
var myDate = new Date();
var myCoolDate = moment(myDate).format('LL');
var myList = [1,2,1,1,1,3,4,3,7,8,9,5,5,5];
var myUniqueList = unique(myList);
console.log(myUniqueList);