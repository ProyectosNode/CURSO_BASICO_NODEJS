const fs = require('fs');
const ops = require('./src7/fileops');

let incValue;

fs.readFile('./clase7/resources/number.txt', 'utf8', (err, text)=>{
    if (err) throw err;
    //console.log(text);
    const numbers = text.split('\n').map(n=>Number(n));
    //console.log(numbers);
    incValue = ops.incrementValues(numbers);
    fs.writeFile('./clase7/resources/numbernew.txt', incValue.join('\n') ,(err, result)=>{
        if (err) throw err;
    });
});

