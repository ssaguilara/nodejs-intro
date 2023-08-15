// Eventos que tratan con datos, conexiones, recibas o envies datos, etc..

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//emit: emitir evento como si diera un clic, on: escuchar determinado evento como el addeventlistener

//recordar una funcion puede recibir varios 
customEmitter.on("response", (data) => {
  console.log('received');
  console.log(data);
});

//response es el evento y lo podemos llamar como queramos
customEmitter.emit('response', 'Hello Word')
customEmitter.emit('response', 'Sergio')
customEmitter.emit('response', 30)
customEmitter.emit('response', [1,2,3])