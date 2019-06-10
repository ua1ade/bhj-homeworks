const clicker__counter=document.getElementById("clicker__counter");
const stopwatch=function() {
  clicker__counter.textContent++;
  setTimeout(stopwatch, 1000);
  alert();
}
const cookie=document.getElementById("cookie");
function changeSizes() {
  if (clicker__counter%2==0) {
    cookie.width=400;
  else if cookie.width=250;
  } 
};
cookie.onclick=changeSizes;
stopwatch();
changeSizes();
