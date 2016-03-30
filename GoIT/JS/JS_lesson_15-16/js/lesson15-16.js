$(document).ready(function(){
$( '.poletext')
  .mouseout(function() {
$('.enter').animate ({opacity:0},10);
  })
  .mouseover(function() {
    $('.enter').animate ({opacity:1},10);
  });




	
$('html').keydown(function(eventObject){ 
  if (eventObject.keyCode == 13) { 
$('.result').empty();
	var name = $('.poletext').val();  
$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + name + '&callback=GoogleCallback&rsz=large&context=?');
  }
});

$('#poleotpravka').click(function otpravka(){
$('.result').empty();
console.log('dsfsf');
	var name = $('.poletext').val();  
$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + name + '&callback=GoogleCallback&rsz=large&context=?');
}); 
}); 
 
 function GoogleCallback (func, data) {
if ($('.main').length === 0){
	var div = $('<div/>',{
    	class: 'main',
    	html:'<div class="result"></div>'
    });
    $('body').append(div);
}

$.each(data.results, function(i, val){
	        
	var b = $('<a/>',{
		class: 'sylka',
		html: '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a>'
	});		                      
	$('.result').append(b);
		   

	var f = $('<p/>',{
			class: 'content',
			html: '<span>'+val.content+'</span>'
	});
		$('.result').append(f);
	       });

}








/*часть 2*/

function Human(){
this.name = 'Vasya';
this.age = 25;
this.sex = 'men';
this.weight = 65;
this.height = 170
};

var newHuman = new Human();

console.log('Human', Human);
console.log('newHuman',newHuman)


 function Worker() {
 this.company = 'editor';
 this.salary = 500;
 this.work = function(){
 	alert('I am frontend developer and i am cool');
 }
};

Worker.prototype = newHuman;
var newWorker = new Worker();

console.log('Worker', Worker);
console.log('newWorker', newWorker)
console.log('newWorker.age', newWorker.age);

function Student() {
this.education = 'editor';
this.grant = 500;
this.watchTVseries = function(){alert('I like horor movees');
}
};

Student.prototype = newHuman;
var newStudent = new Student();

console.log('Student', Student)
console.log('newStudent', newStudent);
console.log('newStudent.sex', newStudent.sex);

