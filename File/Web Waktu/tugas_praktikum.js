function time(){
    let a_p ="";
    let d = new Date();
    let hour = d.getHours(); min = d.getMinutes(); sec = d.getSeconds();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = d.getDate(); nday = d.getDay(); month = d.getMonth(); yy = d.getFullYear();
    
    if (hour < 12) {
        a_p = "AM";
    } else {
        a_p = "PM";
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = "0"+(hour - 12);
    }
    if (min < 10) {
        min = "0"+(min);
    }
    if (sec < 10) {
        sec = "0"+(sec);
    }

    document.getElementById("cobs").innerHTML = (hour + ':' +min + ':' +sec +' '+a_p);
    document.getElementById("cobs2").innerHTML = (days[nday] + ', ' + day + ' ' + months[month] + ' ' + yy);
    document.getElementById("cobs").style.fontSize = "75px"
    document.getElementById("cobs2").style.fontSize = "25px"
    setTimeout('time()',1000)
}
time()

