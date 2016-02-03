
var pole = document.getElementById('#poleotpravka');
pole.addEventListener('click', //тут по логике должен быть наш запрос $.getJSON(key blablabla)
    //но как на него тут сослаться? что конкретно прописать?);

var enter = document.getElementById('#poletext');

$enter.submit(function(e) {
    //тут по логике должен быть наш запрос $.getJSON(key blablabla)
    //но как на него тут сослаться? что конкретно прописать?
});



$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ 'dance' +'&callback=GoogleCallback&rsz=large&context=?')


function GoogleCallback (func, zapros) {
   
    var div = document.createElement("div")
    div.className = 'main';

    $.each(zapros.results, function(i, val){
		         
var s = document.createElement("div");
		s.className = 'result';
		div.appendChild(s);

		var b = document.createElement("a");
		b.className = 'sylka';
		b.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a>';                            
		s.appendChild(b);
		   

		var f = document.createElement("p");
		f.className = 'content';
		f.innerHTML = '<span>'+val.content+'</span>'; 
		s.appendChild(f);
	});

    $('body').html(div);
    
}






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
console.log('new', newStudent);