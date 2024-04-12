function myClock(){
    let c = new Date()
    let h = c.getHours();
    let m = c.getMinutes();
    let s = c.getSeconds();

    let ctime = document.getElementById("time").innerHTML = h + ":"+ m + ":"+s;

}

setInterval(myClock,1000)