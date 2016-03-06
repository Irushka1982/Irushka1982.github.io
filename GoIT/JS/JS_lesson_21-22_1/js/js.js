

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

function min (x, n){} //в браузере срабатывает, тестирование не проходит
var z = Math.min(x, n);
console.log(z);