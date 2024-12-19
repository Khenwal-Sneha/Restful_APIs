let clockbox=document.querySelector(".clockbox");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let timerRunning=false;
let timer=null;

start.addEventListener("click",setTimeout(()=>{
    clockbox.value=`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
},500));