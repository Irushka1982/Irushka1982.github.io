
$(function() {
 
  $('.jcarousel').jcarousel({
  });

   $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });
$('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });
});


jQuery(document).ready(function(){
  jQuery(".submenu-activ").mouseenter(
    function () {
      jQuery('.sub2 li').animate({
          backgroundColor:"#eb7702",
      }, 500 );
  });
  jQuery(".submenu-activ").mouseleave(function() {
      jQuery(this).animate({
          backgroundColor:"#e69a02",
      }, 500 );
  });
  });
jQuery(document).ready(function(){
  jQuery(".sub2-active").mouseenter(
    function () {
      jQuery('.sub3 li').animate({
          backgroundColor:"#fff117",
      }, 500 );
  });
  jQuery(".sub2-active").mouseleave(function() {
      jQuery(this).animate({
          backgroundColor:"#eb7702",
      }, 100 );
  });
  });




$(function(){  
       
     $('.s').mouseover(function(){  
           $( '.submenu' ).show();

           
               });  
          });  

$(function(){  
       
     $('.s').mouseout(function(){  
              $( '.submenu' ).hide();
                $( '.sub2' ).hide();
                 $( '.sub3' ).hide();
                                    });  
            });  




$(function(){  
       
     $('.submenu-activ').mouseover(function(){  
           $( '.sub2' ).show();

               });  
          });  

$(function(){  
       
     $('.submenu-activ').mouseout(function(){  
           $( '.sub2' ).hide();
         });  
            });  


$(function(){  
       
     $('.sub2-active').mouseover(function(){  
               $( '.sub3' ).show();
                          });  
            });  

   $(document).ready(function(){  
       
     $('.sub2-active').mouseout(function(){  
           $( '.sub3' ).hide();
                                    });  
            });  







 $(document).ready(function(){
         
          $( '.checka input[type="checkbox"]').screwDefaultButtons({
             checked: "url(.//img/on.png)",
             unchecked: "url(.//img/of.png)",
             width: 20,
             height: 20
          });
    });