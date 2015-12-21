 var a = document.createElement('div');
  a.className = 'wrapper';
   document.body.appendChild(a);

var b = document.createElement('div');
  b.className = "ciferblat";
  a.appendChild(b);

var c = document.createElement('div');
  c.className = "startbutton";
  a.appendChild(c);

var d = document.createElement('div');
  d.className = "clearbutton";
  a.appendChild(d);


var timer = document.createElement('p');
b.appendChild(timer);
timer.innerHTML = '00:00:00:00';


var start = document.createElement('p');
c.appendChild(start);
start.innerHTML = 'Start';




function startTimer(){
	start.innerHTML = 'Pause';
	id = setInterval(function () {
		timer.innerHTML = calculate();
}, 4);
	start.removeEventListener('click', startTimer);
	start.addEventListener('click', pauseTimer);
	start.innerHTML = "Pause..";
}

start.addEventListener('click', startTimer);


function pauseTimer(){
	clearInterval(id);
	start.addEventListener('click', startTimer);
	start.innerHTML = 'Cont..';
}


var clear = document.createElement('p');
d.appendChild(clear);
clear.innerHTML = 'Clear';
clear.addEventListener('click', stop);

function stop(){

clearInterval(id);
timer.innerHTML = '00:00:00:00';
start.innerHTML = 'Start';
start.addEventListener('click', startTimer);
milliseconds = 0;
seconds = 0;
minutes = 0;
hours = 0;
zero = new Date(0, 0);
}

var zero; 
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var id;
var millisecondsTime;
var zero = new Date(0, 0);

function calculate(){

zero.setMilliseconds( zero.getMilliseconds() + 4);
	var milliseconds = zero.getMilliseconds();

if (milliseconds === 996) {
	milliseconds = 0;
	millisecondsTime = "000" ;
	++seconds;
}
if (milliseconds >= 100){
	millisecondsTime = milliseconds;
	}

if (milliseconds < 100){
	millisecondsTime = "0" + Number(milliseconds);
}
if (milliseconds < 10){
	millisecondsTime = "0" + "0" + Number(milliseconds);
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
return  hours + ':' + minutes + ':' + seconds + ':' + millisecondsTime;

}
