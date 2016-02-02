
var pole = document.getElementById('#poletext');
pole.addEventListener('click', GoogleCallback);

function GoogleCallback (func, zapros) {
    window[func](zapros);
}

$.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ 'dance' +'&callback=GoogleCallback&rsz=large&context=?',

function(zapros){
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
});