(function animate() {
    var block = $('#c1');
    block.animate({backgroundColor: $.Color(block.css('backgroundColor')).hue('+=179')}, 3000, animate);
})();

// Flash highlight
$('#c2').click(function(e) {
    var block = $(e.target);
    var color = $.Color(block.css('backgroundColor'));
    block.animate({backgroundColor: color.lightness('+=0.4')}, 300, function() {
        block.animate({backgroundColor: color}, 300);
    });
});



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

