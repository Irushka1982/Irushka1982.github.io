	$(document).ready(function(){                          
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
								  
								});
											
							console.log(data);
					
								}
							});
						}
				generirovanie();
				



 $('#search__poleotpravka').click(function(){ 

				function generirovanie(queryPic) {
				var slovo = $('.search__poletext').val();
							$.ajax({
								type: "GET",
								dataType: "json",
								cache: false,
								url: 'http://api.pixplorer.co.uk/image?word=' + slovo +'&amount=7&size=m',
								success: function(data) {
				console.log(slovo);
									var vstavka = tmpl($('#zapros').html(), data);

									$('.grid').remove();

									$('#wrapper3').append(vstavka);
									
									$('.grid').masonry({
								  itemSelector: '.grid-item',
								  
								});
											
							console.log(data);
					
								}
							});
						}

					generirovanie();
				});



$('.bxslider').bxSlider({
   	      auto: true,
  autoControls: true,

  });
});



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

			