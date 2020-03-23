function load(){
    let jsonObject = [];
    jsonObject[0] = document.getElementById("Name").value;
    jsonObject[1] = document.getElementById("DOB").value;
    jsonObject[2] = document.getElementById("Address").value;
   

var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
          document.getElementById("body").innerHTML = this.responseText;
      }
      }
      
      xhttp.open("POST", "http://127.0.0.1:1338", true);
      xhttp.send(jsonObject);
      
    console.log(jsonObject);
}