
$(document).ready(function(){ 

	/*

----вариант 1 + шаблон в штмл
			$('#search__poleotpravka').click(function(){

					function () {

						$.ajax({
							type: "GET",
							dataType: "json",
							cache: false,
							url: 'http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l',
							success: function(data) {

								var vstavka = tmpl($('#template').html(), data);

								$('.grid').remove();

								$('#wrapper4').append(vstavka);

							$('.grid').masonry({
											  itemSelector: '.grid-item',
											  columnWidth: 150
											});

											}
										});

					}

		

			/*	


	----	вариант 2


		$(document).ready(function(){                          
		    $('#search__poleotpravka').click(function(){ 
		       $('.grid').empty();
				$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', 
						function(data)
						{console.log(data);
						 этот код в консоли отображается значение Object {images: Array[5], status: "success", count: 5}
		                      });
			}); 
		но при вставке полученного результата в штмл по аналогии с 
			домашкой 15-16.
			 Ошибка в консоли Cannot read property 'results' of undefined-----
						но запрос отрабатывает
						/*$(function (func, data) {
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



/*вариант 3/ + скрипт в штмл/


	 $('#search__poleotpravka').click(function(){
    $.getJSON('http://api.pixplorer.co.uk/image?word=Sport+activity&amount=7&size=l', 
  	  function (data) {
  	  	$.each(data.foto, function(i,foto){
          var template = $('#template').html();   
          var vstavka = {
          	foto: foto
          };
          var content = tmpl(template, {
          	data: vstavka
          });

          $('.shablon').append(content);

         
        });
  });

});
*/


				 

/*----инициализация плагина для карусели-----*/
		 $(window).load(function() {
		      $('.featured').orbit();
	   });

/*--инициализация masonry---*/
	$('.grid').masonry({
				  itemSelector: '.grid-item',
				  columnWidth: 150
				});

	
});






    



