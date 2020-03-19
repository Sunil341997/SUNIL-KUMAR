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
          console.log(this.responseText);
      }
      }
      
      xhttp.open("POST", "http://127.0.0.1:1338/h/hellothere", true);
      xhttp.send(jsonObject);
    console.log(jsonObject);
}