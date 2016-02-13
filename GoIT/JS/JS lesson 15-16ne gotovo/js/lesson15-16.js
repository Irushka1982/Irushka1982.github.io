
$(document).ready(function(){
$('#poleotpravka').click(function otpravka(){
$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&rsz=large&context=?');

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



};






$('#poletext').submit(function(e){
			
			});




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