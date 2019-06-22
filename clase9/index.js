const cp = require('child_process');

function execCommand(command){
    cp.exec(command, (err, stdout, stderr)=>{
        if (err) {
            console.log(`Error: ${err}`); return;
        }
        if (stdout) console.log(`Standart out: \n${stdout}`);
        if (stderr) console.log(`Standart out: \n${stderr}`);
    })
}

//execCommand('ls');
execCommand('node ./clase9/src9/script --base=15');//aqui se define base