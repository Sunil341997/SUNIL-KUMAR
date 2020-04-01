function load(){
  let myForm = document.getElementById('blank');
    const formData = new FormData(myForm);
  let jsonObject = {};

  for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
  }
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var i = 1;
        var table = document.getElementById("myTable");
        var els = document.getElementById("myTable").getElementsByTagName("td");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var response = JSON.parse(this.responseText);
  cell1.innerHTML = response[0][0].name;
  cell2.innerHTML = response[0][0].dob;
  cell3.innerHTML = response[0][0].address;
  console.log(response); 
       i++; 
    }
    }
    xhttp.open("POST", "http://127.0.0.1:1338", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(jsonObject));
  console.log(jsonObject);
}