import express from 'express'; //importando express

const app = express(); //criando uma instancia do express;

app.get('/', (req, res) => {
  res.send('hello world');
});


app.post('/',(req,res)=>{
  const a = 3;
  const b = 5;
  const resultado = a + b;

  res.send("Resultado :" + resultado);  
});

app.listen(3000,()=>{//definindo a porta e chamando uma callback
  console.log('api iniciada');
});

