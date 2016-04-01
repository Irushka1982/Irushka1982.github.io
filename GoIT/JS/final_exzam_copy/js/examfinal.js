
$(document).ready(function(){
      
    $(function() {
          if (window.PIE) {
              $('.enter__sign_up, #search__poleotpravka, #other-button').each(function() {
                 PIE.attach(this);
                });
          }
      });

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

    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=&amount=7&size=m', false);
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

    }

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
          var xmlhttp = getXmlHttp();
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
          }
    });


          $('.bxslider').bxSlider({
             	      auto: true,
            autoControls: true,

            });



              $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                  input.val('');
                  input.removeClass('placeholder');
                }
              }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                  input.addClass('placeholder');
                  input.val(input.attr('placeholder'));
                }
              }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                  var input = $(this);
                  if (input.val() == input.attr('placeholder')) {
                    input.val('');
                  }
                });
              });




});	

        		