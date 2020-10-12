import http from 'http'; //modulo responsavel pelas requisições http

http
  .createServer((requisicao, resposta) => {
    if (requisicao.method === 'GET' && requisicao.url === '/teste') {
      //.url verifica qual a url utilizada
      //propriedade get verifica qual que é o tipo da requisição,neste caso esta verificando se o tipo da requisição é get
      resposta.write('<h1>is get</h1>');
    } else {
      resposta.write('hello world!!'); //escrevento a resposta da requisição
    }
    resposta.statusCode = 200; //toda requisição tem que se ter um status
    resposta.end();
  })
  .listen(8085); //criando o servidor e no .listen esta especificando a porta que sera utilizada na execução,neste caso a porta 8080
