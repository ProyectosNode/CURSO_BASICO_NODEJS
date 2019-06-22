const call = require('./src6/call');

//call.greet('Isai Reyes');

/*call.withPromise('Isai', 'Reyes')
    .then(n=>console.log(n));*/

async function callwithPromise(){
    const fullName = await call.withPromise('Isai', 'Reyes')
        console.log(fullName);
    }
callwithPromise();

/*function callwithPromise(){
    const fullName = call.withPromise('Isai', 'Reyes')
        console.log(fullName);
    }
callwithPromise();*/