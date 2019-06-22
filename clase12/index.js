const greet = require('./src12/greet');

//greet.emit('clap');
//greet.emit('shout', 'VIVA EL AMOR');
greet.emit('call', 'Isai Reyes', (name) => {
    console.log('Estamos llamando a: ', name);
});