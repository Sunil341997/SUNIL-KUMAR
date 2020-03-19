function load(){
  const formData = new FormData(blank);
  let jsonObject = {};
  xhr = new XMLHttpRequest();
  var url = "http://localhost:1338/h/hellothere";
  xhr.open("POST", "http://localhost:1338/h/hellothere", true);
  xhr.setRequestHeader("Content-type", "application/json"); 
for (const [key, value]  of formData.entries()) {
  jsonObject[key] = value;
}
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        
    }
}
var data = JSON.stringify(jsonObject);
xhr.send(data);
}