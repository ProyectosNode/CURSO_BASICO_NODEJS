const express = require('express');
const app = express();

app.get('/app', (req, res)=>{
    res.send('Estoy en la ruta /app')
});

app.get('/', (req, res)=>{
    res.send('Estoy en la ruta HOME')
});

// esta ruta con * siempre tiene que ir al final 
app.get('*', (req, res)=>{
    res.send('No sé dónde estoy')
});

app.listen(3000, ()=>{
    console.log('El servidor express está en escucha en el puerto 3000');
});