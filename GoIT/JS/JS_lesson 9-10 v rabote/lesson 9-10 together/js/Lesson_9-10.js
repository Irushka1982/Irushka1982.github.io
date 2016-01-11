
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
/*menu*/

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
/*label JQ*/
 $(document).ready(function(){
         
          $('input:checkbox').screwDefaultButtons({
             checked: "url(.//img/on.png)",
             unchecked: "url(.//img/of.png)",
             width: 20,
             height: 20
          });
    });