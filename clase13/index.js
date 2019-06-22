const http = require('http'); //modulo http
const fs = require('fs'); // modulo filesystem

const server = http.createServer((req, res)=> {
    fs.readFile('./resources13/index.html', (err, data)=> {
        if(err) {console.error(err); return;}
        res.end(data);
    });
});
console.log('Iniciando Servidor...');
server.listen(3000); //se enciende el servidor y escucha lo que hay en el puerto 3000