import operacoes from "./comon-module.js";//importando os modulos e as funções do arquivo comon-modules
import { divisao, resto } from "./operacoesNomeadas.js";//fazendo uma importação nomeada
console.log(operacoes.soma(2, 3));
console.log(operacoes.substracao(5, 3));
console.log(divisao(10, 2));
console.log(resto(7, 2));//para utilizar a exportação nomeada,tem que se colocar entre chaves e colocar o nome da função que sera utilizada