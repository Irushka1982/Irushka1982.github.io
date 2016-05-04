
var arr = [];

for (var i = 0; i < 5; i++ ) {
	arr[i] = prompt('enter name');
	if(arr[i] === null) {break}
		;
}

var name = prompt('Введите имя пользователя');
var isPresentInTheList = false;



    for (var i = 0; i < arr.length; i++){
     if ( arr[i] === name ){ 
     	isPresentInTheList = true;          
     	}  
}


if (isPresentInTheList){
     	alert(name + ',' + ' ' + 'вы успешно вошли');
 }else{
 alert( 'Ошибка' );
}
