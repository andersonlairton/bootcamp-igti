console.log('ola mundo js');
console.log('arquivo js da pagina intro js');
var title = document.querySelector('h1'); //alterando todos os h1 via js

title.textContent = 'Alterei no js'; //alterando o texto do elemento
var a = 6,
  b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else if (a < b) {
  console.log(a + ' é menor que ' + b);
} else {
  console.log('os numeros são iguais');
}
// switch
var dia = 06,
  r = '';

switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'segunda';
    break;
  case 3:
    r = 'terça';
    break;
  case 4:
    r = 'quarta';
    break;
  case 5:
    r = 'quinta';
    break;
  case 6:
    r = 'sexta';
    break;
  case 7:
    r = 'sabado';
    break;
  default:
    r = 'dia invalido';
    break;
}

console.log(r);
