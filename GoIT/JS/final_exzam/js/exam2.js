
	$(document).ready(function(){                          
			function generirovanie(query) {
				
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

				function generirovanie(query) {
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




/* ----------а это рабочий код кроббраузерного запроса без обработчика на клик
$(document).ready(function(){

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

var xmlhttp = getXmlHttp()
xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
xmlhttp.send(null);
if(xmlhttp.status == 200) {
  var obj = eval('('+xmlhttp.responseText+')');
console.log(obj);


							var vstavka = tmpl($('#zapros').html(), obj);

							$('.grid').remove();

							$('#wrapper3').append(vstavka);
							
							$('.grid').masonry({
						  itemSelector: '.grid-item',
						  
						});
				
				
					
getXmlHttp();

};

});*/

/* а это кроссбраузерный рабочий запрос и обработчик и карусель
$(document).ready(function(){  


function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

var xmlhttp = getXmlHttp()
xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=&amount=7&size=m', false);
xmlhttp.send(null);
if(xmlhttp.status == 200) {
  var obj = eval('('+xmlhttp.responseText+')');
console.log(obj);


							var vstavka = tmpl($('#zapros').html(), obj);

							$('.grid').remove();

							$('#wrapper3').append(vstavka);
							
							$('.grid').masonry({
						  itemSelector: '.grid-item',
						  
						});					
					
getXmlHttp();

};

 $('#search__poleotpravka').click(function(){ 

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
var slovo = $('.search__poletext').val();
var xmlhttp = getXmlHttp()
xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=' + slovo +'&amount=7&size=m', false);
xmlhttp.send(null);
if(xmlhttp.status == 200) {
  var obj = eval('('+xmlhttp.responseText+')');

							var vstavka = tmpl($('#zapros').html(), obj);

							$('.grid').remove();

							$('#wrapper3').append(vstavka);
							
							$('.grid').masonry({
						  itemSelector: '.grid-item',
						  
						});			
					
getXmlHttp();
};
});

$('.bxslider').bxSlider({
   	      auto: true,
  autoControls: true,

  });
});
	*/
/*
var xmlhttp = getXmlHttp();
 xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
 xmlhttp.send(null);
var obj = eval('('+xmlhttp.responseText+')');
		
				$(function(obj) {

							var vstavka = tmpl($('#zapros').html(), obj);

							$('.grid').remove();

							$('#wrapper3').append(vstavka);
							
							$('.grid').masonry({
						  itemSelector: '.grid-item',
						  
						});
						
					
					});


					
				
		getXmlHttp();

});*/
/*


			function getXmlHttp(query) {




				
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






*/

			