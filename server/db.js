snBase = require('./sn_db_controller');

async function read(){
    const arr = await snBase.readAll;
    
    if (arr) return arr;
}


console.log(read().then((res, rej) => {
    return res;
}));
