import fs from "fs"; //importando modulo nativo do js
fs.writeFile("teste.txt", "blablabla", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("arquivo escrito com sucesso"); //
    fs.appendFile("teste.txt", "\n teste append file", function (err) {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        fs.readFile("teste.txt", "utf-8", function (err, data) {
          //lendo o arquivo com readfile
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
}); //escrevendo no arquivo e criando se ele nao existe
