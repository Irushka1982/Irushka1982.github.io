var timer = document.createElement('p');
document.body.appendChild(timer);
timer.innerHTML = '00:00:00:00';


var start = document.createElement('p');
document.body.appendChild(start);
start.innerHTML = 'Start';
start.addEventListener('click', ira);
/*start.addEventListener('click', contin)*/

function startTimer(){
	id = setInterval(function () {
		timer.innerHTML = ira();
}, 1);

}
start.addEventListener('click', startTimer);

/*function contin(){
	clearInterval(id)
	timer.innerHTML = minutes + ':' + seconds + ':' + milliseconds;
	
}*/



var clear = document.createElement('p');
document.body.appendChild(clear);
clear.innerHTML = 'Clear';
clear.addEventListener('click', stop);


function stop(){
clearInterval(id);
timer.innerHTML = '00:00:00:00';
}


var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function ira(){

if (milliseconds === 999) {
	milliseconds = 0;
	++seconds;
}
if (seconds < 10){
	seconds = "0" + Number(seconds);
}
if (seconds >= 60) {
	seconds = 0;
	++minutes;
 }

if (minutes < 10){
	minutes = "0" + Number(minutes);
}
if (minutes >= 60) {
	minutes = 0;
	++hours;
 }

if (hours < 10){
	hours = "0" + Number(hours);
}
if (hours >= 60) {
	hours = 0;
 }

  ++milliseconds;
return  minutes + ':' + seconds + ':' + milliseconds;

}
