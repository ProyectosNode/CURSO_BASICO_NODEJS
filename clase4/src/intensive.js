const loopLimit = 1e9;
module.exports = {
    simulateSync: function (){
        console.log('Comenzando Bloqueo Simulado...');
        for (let i = 0; i <= loopLimit; i += 1) {
            // simulacion para operacion intensiva :
            // cifrado, compresion, proceso de datos, peticion http, query a base de datos.
            if (i === loopLimit) console.log('He llegado al Final!!');
        }
        console.log('El bucle ah Finalizado!');
    },
    simulateAsync: function () {
        console.log('Comenzando Bloqueo Simulado...');
        setImmediate(()=>{
            for (let i = 0; i <= loopLimit; i += 1){
            // simulacion para operacion intensiva :
            // cifrado, compresion, proceso de datos, peticion http, query a base de datos.
            if (i === loopLimit) console.log('He llegado al Final!!');
            }
        });
        console.log('El bucle ha Finalizado!');
    }
}