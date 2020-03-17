var xlsx = require('xlsx');
var readFile = xlsx.readFile('SampleData.xlsx', {cellDates:true});
var ws = readFile.Sheets['SalesOrders'];
var data = xlsx.utils.sheet_to_json(ws);
//tell me about map method
//Google plz..
var newData = data.map(function(record){
    var net = record.UnitCost*record.Units;
    record.Total = net;
    //not updating in sheet only in console.
    delete record.Rep2;
    delete record.Rep3;
    return record;
});
console.log(newData);
//tell me about below code
var newW = xlsx.utils.book_new();
//meaning of work book
var newWS = xlsx.utils.json_to_sheet(newData);
//meaning of work sheet
//difference in between those
xlsx.utils.book_append_sheet(newW, newWS, "New Data");
xlsx.writeFile(newW, "New Data File.xlsx");
