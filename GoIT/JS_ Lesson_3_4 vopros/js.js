
var app = {

  createElement: function (parametr){
    var irochka = document.createElement(parametr.tagName);

    if (parametr.inputType) {
      irochka.setAttribute('type', parametr.inputType);
    }

    if (parametr.className){
      irochka.className = parametr.className;
    }

    if (parametr.content){
      irochka.innerHTML = parametr.content;
    }

if (parametr.value){
  irochka.value = parametr.value; /* Это самостоятельно*/
}
if (parametr.style) {
  irochka.style = parametr.style; /*это самостоятельно*/
}
    if (parametr.glavnyi){
      parametr.glavnyi.appendChild(irochka);
    }

    return irochka;

  },

  perechen: function(vopros, otvet) {
    for (var y = 0; y < vopros; y++ ) {

      this.createElement({
        tagName: 'h2',
        content: 'Вопрос №'+ (y + 1),
        glavnyi: form
       });

      for (var k = 0; k < otvet; k++) {

          var label = this.createElement({
              tagName: 'label',
              content: 'Ответ #' + (k + 1),
              glavnyi: form
           });


          var checkbox = this.createElement({
                tagName:'input',
                inputType:'checkbox'

            });

          label.insertAdjacentElement('afterBegin', checkbox);
      


checkbox.style.cssText = "width: 30px; \
height: 30px; \
border: 2px solid black; \
" /*Это самостоятельно применяю стили. Вопрос 1: не применяется border для checkbox. В кнопке ниже (рядок 101) бордер применяется. может разница в ом что эоcheckbox a там просто button. Кстати через html:  input[type="checkbox i" ] {border: 5px solid black;} не работае*/
        }
    };

  }

}
  




var body = document.querySelector('body');

app.createElement({
  tagName: 'h1',
  content: 'Тест по програмированию',
  glavnyi: body
});

var form = app.createElement({
  tagName: 'form',
  glavnyi: body
});

app.perechen (3,3);

app.createElement({
 tagName:'input',
 inputType:'submit',
value: 'Проверить мои результаты', /*Вопрос 2. Так кнопку создал Олег. А value я указала сама. В работе Олега value осуствовало. Я не знаю как указать стили. В примере выше была названа переменная  var chechbox стр 61. тут переменное не вижу. */
 glavnyi: body
});




var buttonResult = document.createElement('input');   /* Вопрос 3. Эту всю кнопку самостоятельно. Стили применяются, все ок. Правильно ли записан код*/
buttonResult.setAttribute('type','button');
buttonResult.setAttribute('name','butRes');
buttonResult.setAttribute('value','Проверить мои результаты');
body.appendChild(buttonResult);
buttonResult.style.cssText =  "background-color: #cfe1f5; \
width: 325px; \
height: 55px; \
border: 2px solid black; \
font-size: 16px; \
margin: 10px 70px; \
"

// Дальше вниз не смотри. Это  я училась и пробовала разное сама







/*var wrapper = document.createElement ('div')
wrapper.className = "wrapper";
document.body.appendChild(wrapper);

var div = document.createElement ('div');
div.className = "proba";
div.innerHTML = "Irochka"
var wrapper = document.querySelector ('.wrapper');
wrapper.appendChild(div);



var x = document.createElement("UL");
 x.setAttribute("id", "myUL");
 var wrapper = document.querySelector ('.wrapper');
    wrapper.appendChild(x);

 var y = document.createElement("LI");
 var t = document.createTextNode('1.Вопрос №1');
  y.appendChild(t);
var ul = document.querySelector ('UL');
ul.appendChild(y);

 var a = document.createElement("LI");
 var b = document.createTextNode("Tea");
  a.appendChild(b);
var ulu = document.querySelector ('UL');
ulu.appendChild(a);


var x2 = x.cloneNode(true)
x2.querySelector("LI").innerHTML = 'wow'
var wrapper = document.querySelector ('.wrapper');
wrapper.appendChild(x2);



var buttonResult = document.createElement('input');
buttonResult.setAttribute('type','button');
buttonResult.setAttribute('name','butRes');
buttonResult.setAttribute('value','Проверить мои результаты');
wrapper.appendChild(buttonResult);
buttonResult.style.cssText =  "background-color: #cfe1f5; \
width: 325px; \
height: 55px; \
border: 2px solid black; \
font-size: 16px; \
margin: 10px 70px; \
"




   var d = document.createElement("INPUT");
    d.setAttribute("type", "checkbox", "value");
d.value = "blabla";
d.innerHTML += "<p>me</p>";
   /* var wrapper = document.querySelector ('.wrapper');
	wrapper.appendChild(d);*/
   
/*var newDiv = document.createElement('div')
var proba = document.querySelector ('.d');
newDiv.innerHTML = 'sometext';
	/*d.appendChild(newDiv);*/
 /* x.insertBefore(d, x.firstChild);




var r =document.createElement ("input");
r.setAttribute("type", "checkbox", "value");
r.value = "somevalue";
r.innerHTML = "<p>Вариант ответа №1";
var wrapper = document.querySelector ('.wrapper');
wrapper.appendChild(r);


//buttonnode.style.backgroundColor = 'red';
/*buttonnode.style.padding = '17px 44px 17px 44px';
buttonnode.style.border = "2px solid black"; 
buttonnode.style.fontSize = "16px";
buttonnode.style.margin = "10px 70px";

 */



  /*var div = document.createElement('div');
  div.className = "alert alert-success";
  div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

  document.body.insertBefore(div, document.body.firstChild);

  // создать копию узла
  var div2 = div.cloneNode(true);
  // копию можно подправить
  div2.querySelector('strong').innerHTML = 'Супер!';
  // вставим её после текущего сообщения
  div.parentNode.insertBefore(div2, div.nextSibling);




  /*  document.getElementById("myUL").appendChild(y);*/


/* var fr=document.createDocumentFragment();
 var ip=document.createElement("input");
 fr.appendChild(ip);
 ip.setAttribute("type","checkbox");
 ip.setAttribute("checked",true,"value");
 document.body.appendChild(fr);
 ip=null;
 fr=null;

 var wrapper = document.querySelector ('.wrapper');
	wrapper.appendChild(ip);
/*
 var ip=document.createElement("input");
 document.body.appendChild(ip);
 ip.setAttribute("type","checkbox");
 ip.setAttribute("checked",true);
 ip=null;
*/
/*
  var div = document.createElement('div');
  div.className = "alert alert-success";
  div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

  document.body.insertBefore(div, document.body.firstChild);

  // создать копию узла
  var div2 = div.cloneNode(true);
  // копию можно подправить
  div2.querySelector('strong').innerHTML = 'Супер!';
  // вставим её после текущего сообщения
  div.parentNode.insertBefore(div2, div.nextSibling);




*/





 /*  var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox", "value");
x.value = "blabla";
x.innerHTML += "<p>me</p>";
    var wrapper = document.querySelector ('.wrapper');
	wrapper.appendChild(x);
   
var newDiv = document.createElement('div')
var proba = document.querySelector ('.x');
newDiv.innerHTML = 'sometext';
	x.appendChild(newDiv);


 /*var ip=document.createElement("input");
 document.body.appendChild(ip);
 ip.setAttribute("type","checkbox");
 ip.setAttribute("checked",true);
 ip=null;


*/



/*var element = document.createElement('input');
	element.classList.add('box');
	element.innerHTML = 'Действительно умничка!';

	
*/