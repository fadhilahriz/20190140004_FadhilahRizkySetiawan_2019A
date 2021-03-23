var d = new Date();
var hour = d.getHours(); min = d.getMinutes(); sec = d.getSeconds();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = d.getDate(); nday = d.getDay(); month = d.getMonth(); yy = d.getFullYear();
document.getElementById("cobs").innerHTML = (hour + ':' +min + ':' +sec);
document.getElementById("cobs2").innerHTML = (days[nday] + ', ' + day + ' ' + months[month] + ' ' + yy);
document.getElementById("cobs").style.fontSize = "100px"
document.getElementById("cobs2").style.fontSize = "25px"
