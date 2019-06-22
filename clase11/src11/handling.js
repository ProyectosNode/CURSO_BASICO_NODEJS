const fs = require('fs');

module.exports = {
    sync: function(){
        try {
            const m = l;
            const n = m + z;
        } catch(err) {
            throw `This is a sync ${err}`;
        }
    },
    errorFirstCallbackWrong: function() {
        try {
            fs.readFile('/some/file/that/does-not-exist', (err, data) => {
                //mistaken assumption: throwing her...
                if (err) {
                    throw `This is a sync ${err}`;
                }
            });
        } catch(err){
        //This will not cathc the throw!
        console.error(`Catched err: ${err}`);
    }
    console.log('Hola');
},
errorFirstCallback: function() {
    fs.readFile('/some/file/that/does-not-exist', () => {
        if (err) {
            console.error('This error-first callback', err);
            return;
        }
        console.log(data);
    });
}

}