

$(document).ready(function(){
$('html').keydown(function(eventObject){ 
  if (eventObject.keyCode == 13) { 
 $('#poleotpravka').click(function otpravka(){
	var name = $('.poletext').val();  
$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + name + '&callback=GoogleCallback&rsz=large&context=?');
});
  }
});
 
}); 
 
 function GoogleCallback (func, data) {

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


/*

далее следует часть 2 ДЗ. Она закомментирвоана чтобы не влияла при работе на часть 1, с аяксом
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
console.log('new', newWorker); /*Вопрос4. в консоли: "worker is not a function". Разве чтобы создавать экземпляры классов необходимо чтобы класс был функцией?
. но как тогда переписать дочерние классы worker и student чтоыб они были функциями?



var newStudent = new student();
console.log('new', newStudent);*/