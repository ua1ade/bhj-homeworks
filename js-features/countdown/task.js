const stopwatch=function(){
    const timer=document.getElementById("timer");
      timer.textContent--;
    setInterval(stopwatch, 1000);
  if (timer < 0) { 
    clearInterval(stopwatch);
    alert("«Вы победили в конкурсе!»");
  }  
}
stopwatch();
 
