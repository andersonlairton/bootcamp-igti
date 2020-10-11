console.log("hello word node ");

console.log(process.argv); //pega o elemento inputado no node

const numero = parseInt(process.argv[2]);//converte o valor para numero
const multilos = [];

for (let i = 0; i < numero; i++) {
  if (i % 3 === 0 || i % 5 == 0) {
    multilos.push(i); //adicionando o elemento ao array
  }
}

console.log(multilos)
