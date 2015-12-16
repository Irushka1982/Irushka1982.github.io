var timer = document.createElement('p');
document.body.appendChild(timer);
timer.innerHTML = '00:00:00:00';


var start = document.createElement('p');
document.body.appendChild(start);
start.innerHTML = 'Start';
start.addEventListener('click', ira);

function startTimer(){
	timer.style.color = "red";
	setInterval(function () {
timer.innerHTML = ira();
}, 1);

}
	start.addEventListener('click', startTimer);



function ira(){

var milliseconds = 0;
var seconds = 0;
var minutes = 0;



if (milliseconds === 999) {
	++seconds;
}
if (seconds < 10){
	seconds = '0' + seconds;
}
if (seconds >= 60) {
	seconds = 0;
	++minutes;
 }

  
return  minutes + ':' + seconds + ':' + milliseconds;

}
