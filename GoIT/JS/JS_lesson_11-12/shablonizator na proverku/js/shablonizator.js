var content = $('<div/>',{
	class: 'content',
});
$('body').append(content);

var title = $('<h1/>',{
    class: 'fio',
    text: 'Иванов Иван Иванович',
});
$('.content').append(title);

var foto = document.createElement("img");
foto.src = ".//img/IMG_6144.png";

$('.content').append(foto);


var profession = $('<h2/>',{
    class: 'profession',
    text: 'Студент заборостроительного техникума',
});
$('.content').append(profession);

var why = $('<h2/>',{
    class: 'why',
    text: 'Хочу учить фронтенд, потому что:',
});
$('.content').append(why);


var whyUl = $('<ul/>',{
    class: 'whyUl',
    
});
$('.why').append(whyUl);






$(function(){
	var html = $('#napolnenie').html();
	var napolnenieLi = [
	{
		text: 'Я красивый',
		
	},
	{
		text: 'Я умный',
		
	},
	{
		text: 'Умею вышивать крестиком',
		
	},

	{
		text: 'Умею шить на машинке',
		
	},
	{
		text: 'В детстве красиво рисовал бабочек',
		
	},
	

	];

	var vstavka	= tmpl(html, {
		data: napolnenieLi
	});



	$('.whyUl').append(vstavka);
});








$(function(){
	var html = $('#blok').html();
	var about = [
	{
		title: 'Мой контактный телефон',
		content: '+38097222222',
		more: '+38067222222'
	},
	{
		title: 'Мой профиль в соцсетях',
		content: 'vk.com',
		more: 'facebook'
	},
	{
		title: 'Мой фидбек',
		content: 'Если нужно, могу играть на свадьбах',
		more: 'Если нужно, могу построить вам забор'
	}

	];

	var vstavka2	= tmpl(html, {
		data: about
	});


	$('.content').append(vstavka2);
});


