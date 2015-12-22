
var mydiv = $('<div/>', {
    id:     'wrapper',
   });
$('body').append(mydiv);


var content = $('<div/>', {
    id:     'content',
   });
$('#wrapper').append(content);


var ul = $ ('<ul/>',{
	class: 'tabs'
});
$('#content').append(ul);


var firstLi = $('<li/>',{
	class: 't1 tabs-current',
	text: 'Nunc tincidunt'
});
$('ul').append(firstLi);

var secondLi = $('<li/>',{
	class: 't2',
	text: 'Proin dolor'
});
$('ul').append(secondLi)


var thirdLi = $('<li/>',{
	class: 't3',
	text: 'Aenean lacinia'
});
$('ul').append(thirdLi)


var firstDiv = $('<div/>',{
	class: 't11',
		})
$('#content').append(firstDiv);

var secondDiv = $('<div/>',{
	class: 't12',
	});
$('#content').append(secondDiv);

var thirdDiv = $('<div/>',{
	class: 't13',
	});
$('#content').append(thirdDiv);

var firstP = $('<p/>',{
	text:'Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing' 
	});
$('.t11').append(firstP);

var secondP = $('<p/>',{
	text:'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus'
});
$('.t12').append(secondP );

var thirdP = $('<p/>',{
	text:'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat port'
});
$('.t13').append(thirdP);





var $j = jQuery.noConflict();

$j(document).ready(function() {



$j('ul.tabs li').click(function(){
	var f = this.className.slice(0,2);
	$j('div.t1').hide();
	$j('div.t2').hide();
	$j('div.t3').hide();
	$j('div.' + f).show();
	$j('ul.tabs li').removeClass('tab-current');
	$j(this).addClass('tab-current');
	});

});

