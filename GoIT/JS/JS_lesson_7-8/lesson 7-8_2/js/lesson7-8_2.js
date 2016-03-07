var content = $('<div/>', {
    id:'content'
   });
$('body').append(content);

var form = $('<form/>', {
    html:'<fieldset></fieldset>'
   });
$('#content').append(form);

var firstDiv = $('<div/>',{
    class: 'first'
});
$('fieldset').append(firstDiv);


var firstLabel = $('<label>')
.attr('for', 'firstname')
.text('First name:');
$('.first').append(firstLabel);

var firstInput = $('<input type="text">')
.attr({id: 'firstname',
 name: 'firstname'
 });
$('.first').append(firstInput);

var secondDiv = $ ('<div/>',{
    class: 'second'
});
$('fieldset').append(secondDiv);


var secondLabel = $('<label/>',{
    for: 'lastname',
text: 'Last name:'
});
$('.second').append(secondLabel);


var secondInput = $('<input/>',{
    type: 'text',
id: 'lastname',
 name: 'lastname'
  });
$('.second').append(secondInput);



var thirdDiv = $ ('<div/>',{
    class: 'third'
});
$('fieldset').append(thirdDiv);


var thirdLabel = $('<label/>',{
    for: 'address',
text: 'Address:'
});
$('.third').append(thirdLabel);


var thirdInput = $('<input/>',{
    type: 'text',
id: 'address',
 name: 'address'
      });
$('.third').append(thirdInput);

var firstTooltip = $('<p/>',{
    class: 'firsttooltip',
    text: 'Please provide your firstname.'
});
$('.first').append(firstTooltip);

var secondTooltip = $('<p/>',{
    class: 'secondtooltip',
    text: 'Please provide also your lastname.'
});
$('.second').append(secondTooltip);

var thirdTooltip = $('<p/>',{
    class: 'thirdtooltip',
    text: 'Your home or work address.'
});
$('.third').append(thirdTooltip);

var mybutton = $('<button/>',{
  class: 'mybut',
 text: 'Show help'
});
$('#content').append(mybutton);

$('.mybut').click(function(){
     $('p').animate ({opacity:1});
      });





$('#firstname').mouseover(function() {
 $('.firsttooltip').animate ({opacity:1},10);
});
$('#firstname').mouseleave(function() {
 $('.firsttooltip').animate ({opacity:0},10);
});

$('#lastname').mouseover(function() {
 $('.secondtooltip').animate ({opacity:1},10);
});
$('#lastname').mouseleave(function() {
 $('.secondtooltip').animate ({opacity:0},10);
});

$('#address').mouseover(function() {
 $('.thirdtooltip').animate ({opacity:1},10);
});
$('#address').mouseleave(function() {
 $('.thirdtooltip').animate ({opacity:0},10);
});
