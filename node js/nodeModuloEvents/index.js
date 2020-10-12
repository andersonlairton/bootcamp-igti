import { EventEmitter } from 'events'; //importando o modulo de evento

const eventEmmiter = new EventEmitter();
eventEmmiter.on('testEvent', (obj) => {
  console.log(obj);
}); //definidio o evento esperado

// eventEmmiter.emit('testEvent', 'abc'); //emitindo o evento

export default eventEmmiter;
