import { promises as fs } from 'fs';
//função para escrever os json dos estados

// const data = await fs
//   .readFile('./cidades-estados-brasil-json/Estados.json')
//   .then((data) => {
//     // console.log(JSON.parse(data));
//     const states = JSON.parse(data); //guardando os estados
//   });
init();
async function init() {
  await createFiles();
  // await getCitiesCount('MG');
  await getStatesWithMoreCities();
}
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
  // console.log(cities);
}

//criando retorno para a quantidade de cidades que o estado possui
async function getCitiesCount(uf) {
  const data = await fs.readFile(`./states/${uf}.json`); //lendo os arquivos da pasta state com base na uf passada como paramentro
  const cities = JSON.parse(data);

  // console.log(cities.length);
  return cities.length;
}

async function getStatesWithMoreCities() {
  const states = JSON.parse(
    await fs.readFile('./cidades-estados-brasil-json/Estados.json')
  );

  const list = [];

  for (let state of states) {
    //passando as uf para a função de contagem
    const count = await getCitiesCount(state.Sigla);
    list.push({ uf: state.Sigla, count });
  }
  list.sort((b, a) => {
    //ordenando do menor para o maior
    if (a.count > b.count) return 1;
    else if (a.count < b.count) return -1;
    else return 0;
  });
  const result = [];
  list.slice(0, 5); //mostrando apenas 5 elementos do array
  list.slice(0, 5).forEach((item) => result.push(item.uf + '-' + item.count));
  console.log(result);
}
