
var arr = [];
for (var i = 0; i < 5; i++ ) {
	arr[i] = prompt('enter name');
}

var name = prompt('Введите имя пользователя');
   var isPresentInTheList = false;
    for (var i = 0; i < arr.length; i++){
     if ( arr[i] === name ){ 
     	isPresentInTheList = true;
     	alert( name + 'вы успешно вошли' );
     	break;
      } 
}

if (isPresentInTheList);
{ alert( 'Ошибка' );
}