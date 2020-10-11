import readline from 'readline'; //importando modulo readline

const rl = readline.createInterface({
  //importando função que cria interface com o usuario
  input: process.stdin,
  output: process.stdout,
});

perguta();

function perguta() {
  rl.question('digite um numero', (numero) => {
    // console.log(numero);
    if (parseInt(numero) === -1) {
      rl.close();
    } else {
      const multiplos = [];
      for (let i = 3; i < parseInt(numero); i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multiplos.push(i);
        }
      }
      console.log(multiplos);
      perguta();
    }
    // rl.close();
  });
}
