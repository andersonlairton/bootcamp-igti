import {promises as fs} from 'fs';

// init();
writeReadJson();

async function init(){
    try {
        await fs.writeFile("teste.txt",'blblblb');
        await fs.appendFile("teste.txt",'\n kkkk');
        const data = await fs.readFile("teste.txt",'utf-8');
    } catch (error) {
    }
}

async function writeReadJson() {
    try {
        const arrayCarros = [
            "gol",
            "palio",
            "uno"
        ];

        const obj = {//criando um objeto
            carros: arrayCarros//adicionando o valor do array carros aquele objto
        }
        await fs.writeFile("teste.json",JSON.stringify(obj)//convertendo o objeto para string
        );//gerando um arquivo json com o conteudo do objeto 
        // const data = await fs.readFile("teste.json",'utf-8');//lendo um arquivo json
        const data = JSON.parse(await fs.readFile("teste.json"));//lendo um arquivo json
        // console.log(JSON.parse(data));//com o utf-8,data vira uma string,por isso o json parse
        // console.log(JSON.parse(data));// sem o utf-8 ele converte os bytes para json
        data.carros.push("sandero");
        await fs.writeFile("teste.json",JSON.stringify(data));//passando o json para string e escrevendo um novo valor no array 
        console.log(data.carros);
    } catch (error) {
        console.log(error);
    }
}