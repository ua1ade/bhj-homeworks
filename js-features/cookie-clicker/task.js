const clicker__counter = document.getElementById("clicker__counter");
const stopwatch = function() {
	clicker__counter.textContent++;
	alert();
};
setInterval(stopwatch, 1000);

function changeSizes() {
const cookie = document.getElementById("cookie").onclick;	
	if (clicker__counter % 2 == 0) {
		cookie.width = 400;
		else cookie.width = 250;
	}
};
stopwatch();
changeSizes();
