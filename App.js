
var hour=0;
var min=0;
var sec =0;
var msec=0;

var HourHeading= document.getElementById('hour');
var Minheading=document.getElementById('min')
var Secheading = document.getElementById('sec')
var Msecheading=document.getElementById('msec')

var start =document.getElementById('start')
var pause = document.getElementById('pause');
var reset =document.getElementById('resetButton')
var interval;

function StartTimer(){
    msec++;
    Msecheading.innerHTML=msec;
    if(msec>=100){
sec++
Secheading.innerHTML=sec;
msec=0;
    }
else if (sec>=60){1
min++;
Minheading.innerHTML=min;
sec=0;
}
else if (min>=60){
    hour++;
    HourHeading.innerHTML=hour;
    min=0;
}
}


function start1(){
    interval=setInterval(StartTimer,10)
}
function pause1(){
    clearInterval(interval)
}
function resetButton(){
    hour=0;
    min=0;
    sec=0;
    msec=0;

    HourHeading.innerHTML=hour;
    Minheading.innerHTML=min;
    Secheading.innerHTML=sec;
    Msecheading.innerHTML.msec;
    pause1();
}