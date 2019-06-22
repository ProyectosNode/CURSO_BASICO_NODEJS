const call = require ('./src5/call');

//call.withCallback('Isai', call.sync);
call.withPromise('Isai RC')
.then(name=>{console.log(name)});