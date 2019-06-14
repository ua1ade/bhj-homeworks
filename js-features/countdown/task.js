const stopwatch = function() {
  const timer = document.getElementById("timer");
    timer.textContent--;
  setTimeout(stopwatch, 500);
  if (timer.textContent == 0) {
  	alert("«Вы победили в конкурсе!»");
    clearTimeout(stopwatch); 
    timer.onclick = null;
  }
}
function();
