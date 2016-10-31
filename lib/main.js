var async = require("async");

var execParals = (funs,callback) =>{
    var paral = [];
    for(let i in funs){
        paral.push((callback)=>{
            funs[i](callback);
        })
    }
    async.parallel(paral,callback);
}

var service = {
    parallel:(funs,p,callback)=>{
        if(typeof p == 'function'){
            callback = p;
            p = 1e10;
        }
        var me = this;
        var funsTemp = funs.splice(0,p);
        execParals(funs,(err,result)=>{
            funs.length?me.parallel(funs,p,callback):callback();
        })
    },

    series:(funs,callback)=>{
        async.series(funcs,callback);
    }
}

module.exports = service;