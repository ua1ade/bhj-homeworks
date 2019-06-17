const clicker__counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
cookie.onclick = function() {	
	if (clicker__counter.textContent++ % 2 == 0) {
		cookie.width = 300;
	}
	else cookie.width = 250;	
}; 
cookie.onclick();
