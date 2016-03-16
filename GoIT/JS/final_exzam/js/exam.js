
/*	1)	--разные пробы запроса--
		$(document).ready(function(){
$('#search__poleotpravka').click(function otpravka(){
			jQuery.ajax({
    type: "POST",
    url:'http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l',
    data: ajax_data,
    cache: false,
    success: function (html) {
        if (html.length > 0) {
            jQuery("#body").append(html);
        }
    }
});console.log(data)
		});
});
*/




/*	2) --разные пробы запроса--
$(document).ready(function(){                          
    $('#search__poleotpravka').click(function(){                   
        $.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', {}, function(json){  
            $('#body').append(html);                           
        });                
    })
});*/


/* 3) такой код работает :
$(document).ready(function(){                          
    $('#search__poleotpravka').click(function(){   
 		
$.ajax({
        url: 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m',
        success: function(data){
            console.log(data)
        }
    })
	});*/	 //этот код возвращается значение Object {images: Array[7], status: "success", count: 7}*/


$(document).ready(function(){                          
    $('#search__poleotpravka').click(function(){    /*$('.grid').empty();*/
		$.getJSON('http://api.pixplorer.co.uk/image?word=cat&amount=5&size=l', 
				function(data)
				{console.log(data);
                      });
	});  /*этот код в консоли отображается значение Object {images: Array[5], status: "success", count: 5}*/
		


				/* -------вставка полученного запроса в штмл/ Ошибка в консоли Cannot read property 'results' of undefined-----
				но запрос отрабатывает*/

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









    



