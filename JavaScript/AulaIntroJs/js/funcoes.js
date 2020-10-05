//para criar um novo arquivo com gitbash,é so digitar touch nomedoarquivo.extensão
// ctrl+; comenta a linha
console.log('funções.js');

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

function compareNumbers(a, b) {
  // normalmente retorno um numero positivo para verdade,um negativo para falso e zero para igual
  // return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}

console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));

function somatorio(from, upTo) {
  var sum = 0;
  for (let i = from; i < upTo; i++) {
    sum += i;
  }

  return sum;
}

console.log(somatorio(1, 10));
console.log(somatorio(1, 100));
console.log(somatorio(1, 1000));
