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

//operador ternario
a = 71;
b = 7;
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';

console.log(resposta);

//while
//somando com while

var numAtual = 1,
  somatorio = 0;

while (numAtual <= 100) {
  somatorio += numAtual;
  numAtual++;
}

console.log('val somatorio ' + somatorio);

//do-while

var numAtual = 1,
  somatorio = 0;

do {
  //declaranado a função,no do ele executa pelo menos uma vez
  somatorio += numAtual;
  numAtual++;
} while (numAtual <= 10); //fazendo o teste da condição

console.log(somatorio);

//for
somatorio = 0;
for (numAtual = 1; numAtual <= 10; numAtual++) {
  somatorio += numAtual;
}

console.log(somatorio);
