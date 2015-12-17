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
start.addEventListener('click', ira);


function startTimer(){
	id = setInterval(function () {
		timer.innerHTML = ira();
}, 1);

}
start.addEventListener('click', startTimer);


var clear = document.createElement('p');
d.appendChild(clear);
clear.innerHTML = 'Clear';
clear.addEventListener('click', stop);

function stop(){
clearInterval(id);
timer.innerHTML = '00:00:00:00';
start.innerHTML = 'Start'
}

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var id;

function ira(){
start.innerHTML = 'Pause';
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
return  hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

}
