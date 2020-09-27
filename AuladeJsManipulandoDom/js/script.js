console.log('manipulando a dom via js');
// manipulando com queryselect
var title = document.querySelector('h1');

title.textContent = 'mudei com js';

// manipulando com id

var city = document.querySelector('#city');
city.textContent = 'Bsb';

//mudando tds as classse ,select all
var personDataArray = document.querySelectorAll('.data');

personDataArray = Array.from(personDataArray); //isso é chamado de mutabilidade
