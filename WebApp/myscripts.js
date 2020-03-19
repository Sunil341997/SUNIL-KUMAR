function myFunction() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		
		console.log(this.response);
	  }
	}
	xhttp.open("POST", "http://localhost:1338/h/hellothere", true);
	xhttp.send("Hello");
  }