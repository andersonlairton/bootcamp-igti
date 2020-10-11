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
  // await getStatesWithMoreOrLessCities(true);
  // await getStatesWithMoreOrLessCities(false);
  // console.log(await getBiggerName('MG'));
  getBiggerNameCities();
  // await getBiggerName();
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

async function readFile(uf) {
  if (!uf) {
    const states = JSON.parse(
      await fs.readFile('./cidades-estados-brasil-json/Estados.json')
    );
    return states;
  } else {
    const states = JSON.parse(await fs.readFile(`./states/${uf}.json`));
    return states;
  }
}

async function getStatesWithMoreOrLessCities(more) {
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

  if (more) {
    list.slice(0, 5).forEach((item) => result.push(item.uf + '-' + item.count));
  } else {
    //listando os 5 menos cidades
    list.slice(-5).forEach((item) => result.push(item.uf + '-' + item.count));
  }

  console.log(result);
}

async function getBiggerNameCities() {
  const states = await readFile();
  // console.log(states);
  // return;
  const result = [];
  for (let state of states) {
    // console.log(state.Sigla);
    const city = await getBiggerName(state.Sigla);
    // console.log(city);
    // return;
    result.push(city.Nome + '-' + state.Sigla);
  }
  // return result;
  console.log(result);
}

async function getBiggerName(uf) {
  const cities = await readFile(uf);

  // let maxSize = 0;
  // let city;
  let result;

  cities.forEach((city) => {
    // console.log(city);
    if (!result) result = city;
    else if (city.Nome.length > result.Nome.length) result = city;
    else if (
      city.Nome.length === result.length &&
      city.Nome.toLowCase() < result.Nome.toLowCase()
    )
      result = city;
  });
  return result;
}
