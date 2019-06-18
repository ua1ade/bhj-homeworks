const hole = document.getElementById("hole1");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
hole.onclick = function(){
	// for (var i = 1; i < hole.length; i++) {
		if (hole == hole1 || hole == hole2 || hole == hole3) {
			dead.textContent++;
		}
	// }
}
