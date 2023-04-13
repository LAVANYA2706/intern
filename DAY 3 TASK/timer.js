function disp_time()
{
hour=min=sec=0
document.getElementById("timer").innerHTML=hour+":"+min+":"+sec;

 setInterval(function()
  {
    sec=sec+1;
 if(sec>59)
 {
 sec=0
 min=min+1;
}
 if(min>59)
 {
min=0;
hour=hour+1;
 }

if(sec<10 && min<10)
 document.getElementById("timer").innerHTML=hour+":"+"0"+min+":"+"0"+sec;
else
 {
if(sec<10)
 document.getElementById("timer").innerHTML=hour+":"+min+":"+"0"+sec;
 if(min<10) 
    document.getElementById("timer").innerHTML=hour+":"+"0"+min+":"+sec;
}
 },1000)
}