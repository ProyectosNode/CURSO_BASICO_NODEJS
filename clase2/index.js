const math = require ('./math');//esta ruta solamente jala math.js
const bienvenida = require ('./bienvenida');//esta ruta jala el archivo index.js o .json dentro del directorio bienvenida
const saludos = require ('./bienvenida/saludos');//esta ruta jala nomas saludos.js

console.log(math.suma(87,89));
console.log(math.resta(87,89));
console.log(math.division(87,89));
console.log(math.multiplicacion(87,89));

console.log(bienvenida.bienvenida('Isai'));
console.log(saludos.saysaludos('Yas'));