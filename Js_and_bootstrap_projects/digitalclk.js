// document.getElementById("hours");
// document.getElementById("minutes");
// document.getElementById("seconds");
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours()    
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    let ms = dateTime.getMilliseconds()
   if(hr>12)
   {
    hr= hr-12;
    ampm.innerHTML = "PM"
   }
   document.getElementById("hours").innerHTML = padZero(hr);
   document.getElementById("minutes").innerHTML = padZero(min);
   document.getElementById("seconds").innerHTML = padZero(sec);
   document.getElementById("milliseconds").innerHTML = padZero(ms);
}

setInterval(displayTime,1000);

function padZero(val){
    return val<10?"0"+val:val   
}


