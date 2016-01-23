
$(function(){

	var html = $('#blok').html();
	
	var about = [
	{
		"question": "1+2=",
		"answer":{"value1": 'Мой профиль в соцсетях',
		"valuevalue2": 'vk.com',
		"value3": 'facebook'}
	},
	{
		"question": "1+2=",
		"answer":{"value1": 'Мой профиль в соцсетях',
		"valuevalue2": 'vk.com',
		"value3": 'facebook'}
	},
	{"question": "1+2=",
		"answer":{"value1": 'Мой профиль в соцсетях',
		"valuevalue2": 'vk.com',
		"value3": 'facebook'}
	}

	];

var vstavka = tmpl(html, {
		data: about
	});


$('body').append(vstavka);
});
