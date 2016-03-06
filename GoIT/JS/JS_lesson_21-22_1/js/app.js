
var am = {
	
pow: function pow (x, n){
var res = 1;

for (var i = 0; i < n; i++) {
 res = res * x;

}
return res;
},

min: function min (x, n){} //в браузере срабатывает, тестирование не проходит
 
}
module.exports = am;
