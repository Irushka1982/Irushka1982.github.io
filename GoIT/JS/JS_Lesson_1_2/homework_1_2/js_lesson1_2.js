(function(){
var arr = [];
var flag = false;
for (var i = 0; i < 5; i++ ) {
	arr[i] = prompt('enter name');
	if(arr[i] === null) {flag = true;
		break;}
	
}
if (flag === true){return false;}
var name = prompt('Введите имя пользователя');
var isPresentInTheList = false;



    for (var i = 0; i < arr.length; i++){
     if ( arr[i] === name ){ 
     	isPresentInTheList = true;          
     	} 
if(name === null) {isPresentInTheList = false;
	break;}
     	
}

if (isPresentInTheList){
     	alert(name + ',' + ' ' + 'вы успешно вошли');
 }else{
 alert( 'Ошибка' );
}
})
();