$(document).ready(function(){
           
      $('.accordion').click(function(){

          if (!$(this).find('.accordion__title').hasClass('accordactive'))  {
            $('.accordion .accordion__title').removeClass('accordactive');    
            $('.accordion .accordion__text').hide();  
            $(this).find('.accordion__title').addClass('accordactive');
            $(this).find('.accordion__text').show();
          } else {
            $('.accordion .accordion__title').removeClass('accordactive');    
            $('.accordion .accordion__text').hide();  
          }
      });

    $(function() {
           $("#owl-demo").owlCarousel({     
              navigation : true, 
              slideSpeed : 300,
              paginationSpeed : 400,
              singleItem:true   
          });     
    });

});