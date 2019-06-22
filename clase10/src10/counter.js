module.exports = {
    from0to: function(n, inc) {
        console.log(`Counting from to 0 to ${n} by ${inc}: `);
        //debugger;
        for (let i = 0; i < n; i += inc) {
            console.log(i);
        }
    },
    asyncfrom0to: function(n, inc) {
        setImmediate( ()=> {
            console.log(`Counting from to 0 to ${n} by ${inc}: `);
            for (let i = 0; i < n; i += inc) {
                console.log(i);
            }
        })
    }
}