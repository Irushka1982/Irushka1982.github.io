

  $(document).ready(function(){
   $('.accordion').click(function(){
$('.accordion').find('.accordion__title').removeClass('active');    
$('.accordion').find('.accordion__text').hide();    

$(this).find('.accordion__title').addClass('active');
$(this).find('.accordion__text').show();


  });

});


/*$(document).ready(function() {
     
     $('.accordion__title--1').mouseover(function(){  
      $('.accordion__text--1').show();
      $('.accordion__text--2').hide();
      $('.accordion__text--3').hide();
      $('.accordion__text--4').hide();    
            
         });  
   
$(function(){  
            $('.accordion__title--1').mouseout(function(){  
            $('.accordion__text--1').hide();

                });  
            });  


  $(function(){
    $('.accordion__title--2').mouseover(function(){  
      $('.accordion__text--2').show();
      $('.accordion__text--1').hide();
      $('.accordion__text--3').hide();
      $('.accordion__text--4').hide();    
     });       
         });  
   
$(function(){  
            $('.accordion__title--2').mouseout(function(){  
            $('.accordion__text--2').hide();
                });  
            });  


$(function(){
    $('.accordion__title--3').mouseover(function(){  
      $('.accordion__text--3').show();
      $('.accordion__text--1').hide();
      $('.accordion__text--2').hide();
      $('.accordion__text--4').hide();    
            
         });  
  });
   
$(function(){  
            $('.accordion__title--3').mouseout(function(){  
            $('.accordion__text--3').hide();
                });  
            });  



$(function(){
    $('.accordion__title--4').mouseover(function(){  
      $('.accordion__text--4').show();
      $('.accordion__text--1').hide();
      $('.accordion__text--2').hide();
      $('.accordion__text--3').hide();    
          });  
         });  
   
$(function(){  
            $('.accordion__title--4').mouseout(function(){  
            $('.accordion__text--4').hide();
                });  
            });  






});




    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });

*/