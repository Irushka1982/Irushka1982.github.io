
/*$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});*/
jQuery(document).ready(function(){

var params = {
        changedEl: ".lineForm select",
        visRows: 5,
        scrollArrows: true
    }
    cuSel(params);
});
/*$(document).ready(function(){  
  	   
     $('.submenu3').mouseover(function(){  
  	    $('.submenu2').stop().animate({opacity: 0})}).mouseout(function(){
  	     $('.submenu2').stop().animate({opacity: 1})

  	     });  
  	   
  	 });  
$(document).ready(function(){  
       
     $(".bla").mouseover(function(){  
           $( '.submenu2' ).show();
               });  
       
     });  
$(document).ready(function(){  
       
     $(".bla").mouseout(function(){  
           $( '.submenu2' ).hide();
               });  
       
     });  */

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
  