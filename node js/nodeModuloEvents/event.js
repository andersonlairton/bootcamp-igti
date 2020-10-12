import ev from './index.js';

//o on tem qe estar sempre antes do emit
ev.on('testEvent', () => {
  console.log('ouviu tbm');
});
ev.emit('testEvent', 'emitido de outro arquivo'); //disparando o evento
