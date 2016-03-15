

				$(document).ready(function(){
$('#poleotpravka').click(function otpravka(){
			/*$('.grid').empty();*/
			$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', 
				function(data){	console.log(data);
                      });
	}); /* этот код возвращает значение Object {images: Array[5], status: "success", count: 5}*/
		
				/* вставка полученного запроса в штмл

				 $(function (func, data) {
					if ($('.plitka').length === 0){
						var div = $('<div/>',{
					    	class: 'plitka',
					    	html:'<div class='grid'></div>'
					    });
					    $('#wrapper4').append(div);
					}

						$.each(data.results, function(i, val){
							        
							var b = $('<div/>',{
								class: 'grid-item',
								html: '<img> +val' //в єтом коде не уверена
							});		                      
							$('.grid').append(b);
								   
							       });

					});

				 });*/

/*----инициализация плагина для карусели-----*/
			 $(window).load(function() {
		         $('.featured').orbit();
		     });

/*--инициализация masonry---*/
			$('.grid').masonry({
				  // options...
				  itemSelector: '.grid-item',
				  columnWidth: 150
				});
	}); 









    



