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
        
          console.log(this.response);
          document.getElementById("body").innerHTML = this.response;
      }
      }
      
      xhttp.open("POST", "http://127.0.0.1:1338", true);
      xhttp.setRequestHeader("Content-Type", "application/json")
      xhttp.send(JSON.stringify(jsonObject));
    console.log(JSON.stringify(jsonObject));
}