
let online = true;

function changeStatus() {
  if (online){
    online = false;
    var body = document.querySelector('body');
    body.setAttribute("style", "background: #081223;");
    var statusImg = document.getElementById('status');
    statusImg.setAttribute("src", "assets/offline-status.png");
  }
  else {
    online = true;
    var body = document.querySelector('body');
    body.setAttribute("style", "background: #FFFFFF;");
    var statusImg = document.getElementById('status');
    statusImg.setAttribute("src", "assets/online-status.png");

  }
}

function request() {
    if (online) {
  var ul = document.getElementById('request-list');
  var li = document.createElement('li');
  li.innerText = new Date();
  ul.appendChild(li);

    var x = new XMLHttpRequest();
    x.open("GET","./php/createDB.php",true);
    x.send();
    return false;
  }
}

function populateOrders() {
  var x = new XMLHttpRequest();
  x.onreadystatechange=function(){
  if (x.readyState==4 && x.status==200){
    var response = x.responseText;
    console.log(response);
    }
  }
  x.open("GET","./php/queryDB.php",true);
  x.send();
  return false;
}
