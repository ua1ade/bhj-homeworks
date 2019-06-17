const stopwatch = function() {
	const timer = document.getElementById("timer");
	timer.textContent--;
	if (timer.textContent == -1) {
		alert("«Вы победили в конкурсе!»");
		clearInterval(stopwatch); 
	}
}
setInterval(stopwatch, 1000);
stopwatch();
