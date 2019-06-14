const stopwatch = function() {
	const timer = document.getElementById("timer");
	timer.textContent--;
	setInterval(stopwatch, 1000);
	if (timer.textContent == 0) {
		alert("«Вы победили в конкурсе!»");
		clearInterval(stopwatch); 
	}
}
stopwatch();
