
$(function(){
	var html = $('#test').html();
	var articles = [
	{
		title: 'lesson 1',
		content: 'lesson 1'
	},
	{
		title: 'lesson 2',
		content: 'lesson 2'
	}
	];

	var content	= tmpl(html, {
		data: articles
	});



	$('body').append(content);
});



$(function(){
	var html = $('#test2').html();
	var lishka = [
	{
		title: 'lesson 1',
		
	},
	{
		title: 'lesson 2',
		
	}
	];

	var vstavka	= tmpl(html, {
		data: lishka
	});



	$('.blok').append(vstavka);
});