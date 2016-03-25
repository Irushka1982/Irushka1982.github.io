'use strict';

$(document).ready(function content(){

	var html = $('#blok').html();
			
		const about = [
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

		const vstavka = tmpl(html, {
				data: about
			});
					
		$('body').append(vstavka);


localStorage.setItem('kluch', JSON.stringify(about));
let test = localStorage.getItem('kluch');
test = JSON.parse(test);
console.log(test);
		
		
			const rightAnswer = ['ideurope2', 'idafrica3', 'idasia3'];

			$(document).on('click', '#button', function check() {
				let count = 0;
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
