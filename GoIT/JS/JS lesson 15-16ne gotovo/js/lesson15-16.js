

$(document).ready(function(){
$('#poleotpravka').click(function otpravka(){
$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + name + '&callback=GoogleCallback&rsz=large&context=?');
}); 
}); /*Вопрос 1) этот синтаксис из рядка 7 закрывает $(document).ready(function(){. Но необходимо, чтобы весь код был обернут в $(document).ready(function(){
	Если перенести эти )}; в конец кода т.е. в ряд 51 тогда в консоли ошибка
Но сли оставить текущий синтаксис запрос отправляется без ошибки (хотя и получает значение undefind , 
	но об этой проблеме в другом вопросе вопросе.) Почему и как исправить?*/



 var name = $('#poleotpravka').val();  /*Вопрос 2. В запрос аякс передаю значение из #poleotpravka, но оно не работает.
  В то же время если передать просто  var name = 'проба' то запрос отрабатывает верно. Как исправить?*/

function GoogleCallback (func, data) {/* при создании дом элементов елементы sylka и content в .result 
	вписывается не одна пара, а много. как исправить?*/ 
   
    var div = $('<div/>',{
    	class: 'main'
    });
    $('body').append(div);

    $.each(data.results, function(i, val){
		         
		var s = $ ('<div/>',{
			class: 'result'});
		    $('.main').append(s);
			

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


$('#poletext').submit(function(e){/* Вопрос 3. сюда нам надо внести function otpravka т.е. выполнение нашего запроса.}); 
 правильно ли я понимаю что именно сюда вписать и как это верно прописать?*/});

//далее следует часть 2 ДЗ

/*
var human = {
 name: 'Vasya',
 age: 25,
 sex: 'men',
 weight: 65,
 height: 170
};


 var worker = {
 company: 'editor',
 salary: 500,
 work: function(){
 	alert('I am frontend developer and i am cool');
 }
};
worker.__proto__ = human;

 var student = {
 education: 'editor',
 grant: 500,
 watchTVseries:function(){alert('I like horor movees');
}
};

student.__proto__ = human;


var newWorker = new worker();
console.log('new', newWorker);

var newStudent = new student();
console.log('new', newStudent);*/