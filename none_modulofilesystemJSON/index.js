import {promises as fs} from 'fs';

init();
// writeJson();

async function init(){
    try {
        await fs.writeFile("teste.txt",'blblblb');
        await fs.appendFile("teste.txt",'\n kkkk');
        const data = await fs.readFile("teste.txt",'utf-8');
    } catch (error) {
    }
}