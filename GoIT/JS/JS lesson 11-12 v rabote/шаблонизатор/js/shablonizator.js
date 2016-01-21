var content = $('<div/>',{
	class: 'content',
});
$('body').append(content);

var title = $('<h1/>',{
    class: 'nazva',
    text: 'Иванов Иван Иванович',
});
$('.content').append(title);

var foto = document.createElement("img");
foto.src = ".//img/IMG_6144.png";

$('.content').append(foto);





var who = $('<h3/>',{
    class: 'who',
    text: 'Студент заборостроительного техникума',
});
$('.content').append(who);

var why = $('<h3/>',{
    class: 'why',
    text: 'Хочу учить фронтенд, потому что:',
});
$('.content').append(why);




var abc = $('<ul/>',{
    class: 'abc',
    
});
$('.why').append(abc);






$(function(){
	var html = $('#test2').html();
	var lishka = [
	{
		title: 'Я красивый',
		
	},
	{
		title: 'Я умный',
		
	},
	{
		title: 'Умею вышивать крестиком',
		
	},

	{
		title: 'Умею шить на машинке',
		
	}
	];

	var vstavka	= tmpl(html, {
		data: lishka
	});



	$('.abc').append(vstavka);
});








$(function(){
	var html = $('#test').html();
	var about = [
	{
		title: 'Мой контактный телефон',
		content: '+38097222222',
		more: '+38067222222'
	},
	{
		title: 'мой профиль в соцсетях',
		content: 'vk.com',
		more: 'facebook'
	},
	{
		title: 'Мой фидбек',
		content: 'Если нужно, могу играть на свадьбах',
		more: 'Если нужно, могу построить вам забор'
	}

	];

	var content2	= tmpl(html, {
		data: about
	});


	$('.content').append(content2);
});


