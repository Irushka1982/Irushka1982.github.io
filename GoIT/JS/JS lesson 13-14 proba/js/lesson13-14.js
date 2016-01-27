
$(function(){

	var html = $('#blok').html();
	
	var about = [
	{
		"question": "Какое из государств  не находится в Европе?",
		"answer":{"value1": 'Греция',
		"value2": 'Мальта',
		"value3": 'Испания'}
	},
	{
		"question": "Какое из государств не находится в Африке?",
		"answer":{"value1": 'Ливия',
		"value2": 'Тунис',
		"value3": 'Парагвай'}
	},
	{"question": "Какое из государств не находится в Азии?",
		"answer":{"value1": 'Таиланд',
		"value2": 'Армения',
		"value3": 'Намибия'}
	}

	];

var vstavka = tmpl(html, {
		data: about
	});


$('body').append(vstavka);
});

 

var checkboxArray = $('input[type="checkbox"]:checked');

var rightAnswer = ['check1', 'check2', 'check3' ];

var currentID =  $(document).ready(function() {
    $("checkbox")
        alert($(checkboxArray[i]).attr("id"));
    });



for (var i = 0; i < checkboxArray.length; i++) {
  if (rightAnswers.indexOf(currentID) + 1) {
   alert('правильно')}
   else {
   	alert('неверно')}
  };




 