
$(document).ready(function content(){

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



$(function() { /*кстати этот ряд 36 нужен или можно без него?*/
$('#button').click(function check(){
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
  showMessage(count); });
		

$(function showMessage(count){  
      if (count < 3){
          $('.modalgood').show();
       }
      if(count === 3) {
          $('.modalbad').show();
  });/*ряд 60 консоль не признает Unexpected token ) но она ведь тут нужна!
/*можно ли в JQ использовать конструкцию if?
в интернете есть такой пример, он верен? нужно ли её перекраивать под
 наш вариант
не очень представляю как
if( $('#add').size() > 0 )
{
// усл
}
else
{
// усл
}
 */


$(function() { /*кстати этот ряд 76 нужен или можно без него?*/
$('.again').click(function startAgain (){
$(allCheckedCheckboxes).removeAttr('checked');
 $('.modalgood', '.modalbad').hide;
});
});/*на ряд 81 консоль возмущается Unexpected end of input, но по-моему}); здесь нужны
/*а даже если их убрать все равно ошибка.

