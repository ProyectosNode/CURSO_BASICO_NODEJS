module.exports = {
    //version sincrona
    syncSum: function (a,b) {
        console.log(a+b);
    },
    //version asincrona
    asyncSum: function (a,b) {
        setTimeout(()=>{
            console.log(a+b);
        }, 5000);
    }
}