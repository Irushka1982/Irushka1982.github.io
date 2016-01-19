
$(function(){
	var html = $('#test').html();
	var articles = [
	{
		title: 'ira',
		content: 'horoshaya devochka.'
	},
	{
		title: 'irushechka',
		content: 'plushechka'
	}
	];

	var content	= tmpl(html, {
		data: articles
	});



	$('body').append(content);
});