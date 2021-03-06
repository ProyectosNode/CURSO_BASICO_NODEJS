module.exports = {
    sync: function (nombre) {
        return `Hola ${nombre}! Bienvenido a Node.js`;
    },
    withCallback: function (nombre, cb) {
        console.log('Comenzando llamada...')
        setTimeout(()=>{
            console.log(cb (nombre));
        }, 5000);
    },  
    withPromise: function (nombre) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(nombre);
            }, 5000);
        })
    }
}