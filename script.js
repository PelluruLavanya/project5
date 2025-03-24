let startTimeEle=document.getElementById("startTime");
let stopTimeEle=document.getElementById("StopTime");
let ResetTimeEle=document.getElementById("ResetTime");

startTimeEle.addEventListener('click',startTime);
stopTimeEle.addEventListener('click',stopTime);
ResetTimeEle.addEventListener('click',resetTime);

let interval;
let milliSec=0;
let sec=0;
let min=0;

function startTime()
{
    interval=setInterval(function()
    {
        milliSec++;
        if(milliSec==1000)
        {
            sec++;
            milliSec=0;
        }
        if(sec==60)
        {
            min++;
            sec=0;
        }
        let time=`${min < 10 ? "0"  : ""}${min} : ${sec < 10 ? "0": ""}${sec} : ${milliSec}`
        document.getElementById("time").innerText=time;
    },1)
}

function stopTime()
{ 
     clearInterval(interval);
}

   function resetTime()
   {
    stopTime();
    milliSec=0;
    sec=0;
    min=0;
    document.getElementById("time").innerText="00 : 00 : 000";

 }
// -----------------------------------------------------------------------------

let str="My name is abcd";
document.getElementById("text").innerText = str;
let flag=false;//t

function textTyping()
{
    if(!flag)
    {
        flag=true;
        startTime();
    }
    let typedText=document.getElementById("typedText").value;

    let len=typedText.length;
   
    let ele=document.getElementById("error");

    ele.style.border="10px solid blue";

    if(typedText[len-1]!=str[len-1])
    {
        ele.style.border="10px solid red";
    }

   if(typedText==str)
   {
    stopTime();
    ele.style.border="10px solid green";
   }
}
