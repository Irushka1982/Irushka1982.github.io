'use strict';


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


localStorage.setItem('ab', JSON.stringify(about));
var test = localStorage.getItem('ab');
test = JSON.parse(test);
/*console.log(test);*/
		
		
			var rightAnswer = ['ideurope2', 'idafrica3', 'idasia3'];

			$(document).on('click', '#button', function check() {
				var count = 0;
				
				var allCheckedCheckboxes = $('input[type="checkbox"]:checked'); 
				 $(allCheckedCheckboxes).each(function(i, el) {
					  var currentId = $(el).attr("id");
					  
					if (rightAnswer.indexOf(currentId) + 1) {
						   count++}
										});
	
			showMessage(count); 
					});

		




		function showMessage(count){
		      if (count < 3){
		          $('.modalbad').show();
		      	 }
		      if(count === 3) {
		          $('.modalgood').show();
		 		 }
		 	
			}

		$('.again').click(function startAgain (){
			var allCheckedCheckboxes = $('input[type="checkbox"]:checked'); 
			$(allCheckedCheckboxes).removeAttr('checked');
			$('.modalgood, .modalbad').hide();

			});

});
