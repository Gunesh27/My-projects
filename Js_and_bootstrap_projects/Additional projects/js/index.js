// document.getElementById("start")
// document.getElementById("stop")
// document.getElementById("reset")

//start - setTime (seconds)  seterval
//stop - clearinterval
//reset - clearinterval,make all 0

const BtnStart = document.getElementById("start")
const BtnStop = document.getElementById("stop")
const BtnReset = document.getElementById("reset")
let hr=min=sec=ms=0, startTimer;

BtnStart.addEventListener("click",()=>{
    startTimer = setInterval(()=>{
       
        ms++;
        if(ms==100){
            sec++;
            ms=000;
        }
        if(sec==60){        
            min++;
            sec=0;
        }
        if(min==60){     
            hr++;
            min =0;
           
        }
        updateDisplay()
    },10)
});

BtnStop.addEventListener("click",()=>{
   clearInterval(startTimer);
});

BtnReset.addEventListener("click",()=>{
    hr=min=sec=ms=0;
    clearInterval(startTimer)
    updateDisplay()
});

function updateDisplay(){
    phr = hr<10?"0"+hr:hr;
    pmin = min<10?"0"+min:min;
    psec = sec<10?"0"+sec:sec;
    pms = ms<10?"0"+ms:ms;
    document.getElementById("hours").innerText = phr;
    document.getElementById("minutes").innerText = pmin;
    document.getElementById("seconds").innerText = psec;
    document.getElementById("milliseconds").innerText = pms;
}
































































// let timeRef = document.getElementById("timeRef");
// let [milliseconds,seconds] = [0,0]
// let int = null;

// document.getElementById("start").addEventListener("click",startTime())

// function startTime(){
// if(int!==null)
// clearInterval(int)
// else
// int = setInterval(displayTimer(),10)
// }

// document.getElementById("stop").addEventListener("click",stopTime())

// function stopTime(){

// clearInterval(int);
// }

// document.getElementById("reset").addEventListener("click",resetTime())

// function resetTime(){
// clearInterval(int);
// [milliseconds,seconds] = [0,0]
// timeRef.innerHTML = "00:000"
// }


// function displayTimer(){
//     milliseconds += 10;

//     if(milliseconds == 1000){
//     milliseconds = 0;
//     seconds++;
//     }

//     timeRef.innerHTML = `${seconds}:${milliseconds}`
// }



