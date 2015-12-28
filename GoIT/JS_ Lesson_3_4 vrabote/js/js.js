
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
    for (var y = 0; y < vopros; y++) {
      this.createElement({
        tagName: 'h3',
        content: (y + 1)+ '.' + 'Вопрос №'+ (y + 1),
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
                inputType:'checkbox',
                /*className: 'checka'*/

            });

          label.insertAdjacentElement('afterBegin', checkbox);
      
      }
    };

  }

}
  




var body = document.querySelector('body');

app.createElement({
  tagName: 'h2',
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
value: 'Проверить мои результаты', 
 glavnyi: body
});
