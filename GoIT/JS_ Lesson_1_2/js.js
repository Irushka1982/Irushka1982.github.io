var x = +prompt('Введите число');
var n = +prompt('Введите степень');

function pow (x, n){
var result = 1;

for (var i = 0; i < n; i++) {
 result = result * x;
}
return result;
}

var resultat = pow(x, n);
console.log ('Ваш результат = ', resultat);


var arr = [];
for (var i = 0; i < 5; i++ ) {
	arr[i] = prompt('enter name');
}

var name = prompt('Введите имя пользователя');
    for (var i = 0; i < arr.length; i++){
     if ( arr[i] === name ){ 
     	alert( 'Ирочка, вы успешно вошли' );
    } else { 
        alert( 'Ошибка' );
      }
  }