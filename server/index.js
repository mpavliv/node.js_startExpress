const express = require('express');
bodyParser = require('body-parser');
snBase = require('./sn_db_controller');

const PORT = 8080;

const app = express();
app.use(bodyParser.text({type: 'text/plain', limit: '50mb'}))




app.get('/sn', (req, res) => {
    res.send(Array.from(sn).join('\n'));
})

app.post('/sn', (req, res) => {
    if (!req.body) {
        console.log('no body in require');
        return res.sendStatus(400);
    }
    snBase.addSN(req.body);
    res.sendStatus(200);
})


app.post('/fileSn', (req, res) => {
    console.log('fileSn');
    if (!req.body) {
        console.log('no body in require');
        return res.sendStatus(400);
    }
    snBase.deleteTable();
    snBase.createTable('sn');
    const data = req.body;
    const arr = data.split('\n')
    let i = 0;
    arr.forEach(element => {
        i += 1;
        snBase.addSN(element);
        console.log(i);        
    });
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})


