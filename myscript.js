function loadDoc(url, cFunction) {
  var xmlhttp;
  if(window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function loadPopular(xhttp) {
  document.getElementById("clickd-content").innerHTML =
  xhttp.responseText;
}