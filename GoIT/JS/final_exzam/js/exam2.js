	$(document).ready(function(){                          
		    $('#search__poleotpravka').click(function(){ 

function generirovanie(queryPic) {

			$.ajax({
				type: "GET",
				dataType: "json",
				cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=&amount=7&size=tb',
				success: function(data) {

					var vstavka = tmpl($('#zapros').html(), data);

					$('.grid').remove();

					$('#wrapper3').append(vstavka);
					

					$('.grid').masonry({
				  itemSelector: '.grid-item',
				  columnWidth: 150
				});
				
console.log(data);
	
				}
			});
		}

		generirovanie();
});


 $(window).load(function() {
		      $('.featured').orbit();
	   });

});
/*
есть ещё несколько вариантов:




	2)	$(document).ready(function(){                          
		    $('#search__poleotpravka').click(function(){ 
		       $('.grid').empty();
				$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', 
						function(data)
						{console.log(data);
						 этот код в консоли отображается значение Object {images: Array[5], status: "success", count: 5}
		                      });
			}); 
	
						$(function (func, data) {
							if ($('.plitka').length === 0)

							{
								var div = $('<div/>',{
							    	class: 'plitka',
							    	html:'<div class="grid"></div>'
							    });
							    $('#wrapper3').append(div);

							}

								$.each(data.results, function(i, val){
									        
									var b = $('<div/>',{
										class: 'grid-item',
										html: '<img> +val' //в єтом коде не уверена
									});		                      
									$('.grid').append(b);
										   
									       });

							});
*/
	


/*а это пример кроссбраузерного запроса для ие8, нам ведь надо кросбраузерность делать
пока не смогла адаптировать под наш запрос
		$(document).ready(function(){                          
		    $('#search__poleotpravka').click(function(){ 

$.ajax({
  url: 'http://api.pixplorer.co.uk/image?word=&amount=7&size=tb',/*этот адрес выводит ошибку,а с другимпримером работает
  data: 'this is data being posted to the server',
  contentType: 'text/plain',
  type: 'POST',
  dataType: 'json'
}).done(function(data) {
  console.log(data);
});

});
});
*/

			