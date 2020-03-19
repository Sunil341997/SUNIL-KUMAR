
function myFunction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      };
      }
    
    xhttp.open("GET", "Details.html", true);
    xhttp.send();
  }
  