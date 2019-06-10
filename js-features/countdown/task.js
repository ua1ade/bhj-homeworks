const stopwatch=function(){
    const timer=document.getElementById("timer");
      timer.textContent--;
    setTimeout(stopwatch, 1000);
  if (timer.textContent==-1) { 
    clearTimeout(stopwatch);
    alert("«Вы победили в конкурсе!»");
   }  
}
stopwatch();
 
