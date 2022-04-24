function showTime(){
    var date = new Date();
    var h = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
    var time = h/1000 + " ks"
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
