  
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

});