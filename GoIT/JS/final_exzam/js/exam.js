
$(document).ready(function(){


$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 100
});


$('html').keydown(function(eventObject){ 
  if (eventObject.keyCode == 13) { 
$('.result').empty();
	/*var name = $('.poletext').val();  */
$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l');
  }
});

$('#poleotpravka').click(function otpravka(){
$('.result').empty();

/*	var name = $('.poletext').val();  */
$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l');
}); 
}); 



 function GoogleCallback (func, data) {
if ($('.main').length === 0){
	var div = $('<div/>',{
    	class: 'main',
    	html:'<div class="result"></div>'
    });
    $('#wrapper4').append(div);
}

$.each(data.results, function(i, val){
	        
	var b = $('<div/>',{
		class: 'foto',
		/*html: '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a>'*/
	});		                      
	$('.result').append(b);
		   
/*
	var f = $('<div/>',{
			class: 'content',
			html: '<span>'+val.content+'</span>'
	});
		$('.result').append(f);*/
	       });



};

