
function myFunction() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "DataList.html", true);
   xhttp.send(null);
    document.getElementById("blank").innerHTML = "Succesfully Submitted";
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = xhttp.responseText;
      }
    }
    
  }
 
