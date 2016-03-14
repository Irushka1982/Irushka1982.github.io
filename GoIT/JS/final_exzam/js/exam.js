
$(document).ready(function(){

	$('#poleotpravka').click(function otpravka(){
$('.result').empty();
$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', function(data){console.log(data);
 });
	});

 $(function (func, data) {
if ($('.main').length === 0){
	var div = $('<div/>',{
    	class: 'main',
    	html:'<div class="result"></div>'
    });
    $('#wrapper4').append(div);
}

$.each(data.results, function(i, val){
	        
	var b = $('<div/>',{
		class: 'sylka',
		html: '<div>'+val+'</div>'
	});		                      
	$('.result').append(b);
		   

	var f = $('<div/>',{
			class: 'content',
			html: '<div>'+val+'</div>'
	});
		$('.result').append(f);
	       });

});




});



/*

	$('.grid').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 100
	});
*/