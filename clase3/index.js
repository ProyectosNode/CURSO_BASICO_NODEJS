//ejecute el comando "npm i cowsay" dentro del directorio clase3 desde la terminal
const cowsay = require('cowsay');//para modulo externo npm no se usa ruta, solo nombre del modulo

console.log(cowsay.say({
    text: 'hola, soy una vaquita!',
    e: 'oO',
    T: 'U' 
}))