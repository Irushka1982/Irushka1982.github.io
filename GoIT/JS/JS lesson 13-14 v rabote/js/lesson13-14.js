
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
	


function showMessage(count){  
      if (count < 3){
          $('.modalbad').show();
       }
      if(count === 3) {
          $('.modalgood').show();
  }
}

$('.again').click(function startAgain (){
$(allCheckedCheckboxes).removeAttr('checked');
 $('.modalgood', '.modalbad').hide();

});

