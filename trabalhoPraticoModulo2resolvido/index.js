import { promises as fs } from 'fs';
//função para escrever os json dos estados

// const data = await fs
//   .readFile('./cidades-estados-brasil-json/Estados.json')
//   .then((data) => {
//     // console.log(JSON.parse(data));
//     const states = JSON.parse(data); //guardando os estados
//   });

createFiles();

async function createFiles() {
  let data = await fs.readFile('./cidades-estados-brasil-json/Estados.json');
  const states = JSON.parse(data);

  data = await fs.readFile('./cidades-estados-brasil-json/Cidades.json');
  const cities = JSON.parse(data);
  //criando um arquivo para cada estado

  for (let state of states) {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await fs.writeFile(
      `./states/${state.Sigla}.json`,
      JSON.stringify(stateCities)
    );
  }
  console.log(cities);
}
