var timer = document.createElement('p');
document.body.appendChild(timer);
timer.innerHTML = '00:00:00:00';


var start = document.createElement('p');
document.body.appendChild(start);
start.innerHTML = 'Start';
start.addEventListener('click', ira);

function startTimer(){
	timer.style.color = "red";
	timer.innerHTML = time;
}
	start.addEventListener('click', startTimer);

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var time;

function ira(){

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
time = minutes + ':' + seconds + ':' + milliseconds;
timer.innerHTML = time;
}
