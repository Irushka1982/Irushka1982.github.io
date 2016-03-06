$(document).ready(function(){
$('html').keydown(function(eventObject){ 
  if (eventObject.keyCode == 13) { 
$('.main').empty();
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




/*далее следует часть 2 ДЗ. Она закомментирвоана чтобы не влияла при работе на часть 1, с аяксом
var human = {
 name: 'Vasya',
 age: 25,
 sex: 'men',
 weight: 65,
 height: 170
};


 function Worker(){
 company = 'editor',
 salary = 500,
 work = function(){
 	alert('I am frontend developer and i am cool');
 }
};
Worker.__proto__ = human;

 function Student(){
 education = 'editor',
 grant = 500,
 watchTVseries = function(){alert('I like horor movees');
}
};

Student.__proto__ = human;


var newWorker = new Worker();
console.log('newWorker', newWorker); 



var newStudent = new Student();
console.log('newStudent', new Student);*/