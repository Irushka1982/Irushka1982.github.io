
/*
$(function(){  
       
     $('.s').mouseover(function(){  
           $( '.submenu' ).show();
           $( '.sub2' ).hide();
           $( '.sub3' ).hide();
               });  
          });  

$(function(){  
       
     $('.s').mouseout(function(){  
              $( '.submenu' ).hide();
                                    });  
            });  

*/



$(function(){  
       
     $('.submenu-activ').mouseover(function(){  
           $( '.sub2' ).show();
           $( '.sub3' ).hide();
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
  