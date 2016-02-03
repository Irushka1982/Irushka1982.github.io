
$(function content(){

	var html = $('#blok').html();
	
	var about = [
	{
		"question": "Какое из государств  не находится в Европе?",
		"answer":{"europe1": 'Греция',
		"europe2": 'Мальта',
		"europe3": 'Испания'}
	},
	{
		"question": "Какое из государств не находится в Африке?",
		"answer":{"africa1": 'Ливия',
		"africa2": 'Тунис',
		"africa3": 'Парагвай'}
	},
	{"question": "Какое из государств не находится в Азии?",
		"answer":{"asia1": 'Таиланд',
		"asia2": 'Армения',
		"asia3": 'Намибия'}
	}

	];

var vstavka = tmpl(html, {
		data: about
	});

$('body').append(vstavka);
});


function check(){
var count
var rightAnswer = ['id-europe2', 'id-africa3', 'id-asia3' ];

$(document).on('click', 'button', function() {
 var allCheckedCheckboxes = $('input[type="checkbox"]:checked'); 

 $(allCheckedCheckboxes).each(function(i, el) {
   var currentId = $(el).attr("id"),
   count = 0;
if (rightAnswers.indexOf(currentID) + 1) {
   count++}
    })
});

    showMessage(count); //это мы тут обозначаем что должна показываться функцию showMessage?
}


function showMessage(count){  
      if (count < 3){
           document.getElementById(".modal-bad").style.display = "block";
       }
           if(count == 3) {
           document.getElementById(".modal-good").style.display = "block";
      }
  }


var knopka = document.getElementById('#button');
knopka.addEventListener('click', check);


var againbutton = document.getElementById('.again');
againbutton.addEventListener('click', startAgain);


function startAgain(){  
     againbutton.removeEventListener('click', showMessage);//сначала думала при клике закрыть лишь модальное окно//
     againbutton.removeEventListener('click', check);//потом решила что надо бы ещё все все чекнутые чекбоксы обнулить//
  //но должно существовать одно общее обнуление всей страницы, всех функций? какое?
$(allCheckedCheckboxes).removeAttr('checked');//или таким способом..
//ВОПРОС: какую технику избрать и что прописать?
  }

