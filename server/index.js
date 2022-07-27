const express = require('express');
bodyParser = require('body-parser');
snBase = require('./sn_db_controller');

const PORT = 8080;
let sn;
sn = new Set()

const app = express();
app.use(express.urlencoded({ extended: true, }));
app.use(bodyParser.text({type: 'text/plain'}))
  
//app.use(express.json());
snBase.deleteTable();
snBase.createTable('sn');


app.get('/sn', (req, res) => {
    res.send(Array.from(sn).join('\n'));
})

app.post('/sn', (req, res) => {
    if (!req.body) {
        console.log('no body in require');
        return res.sendStatus(400);
    }
    receivedData = req.body;
    snBase.addSN(req.body);
    sn.add(req.body) 
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})


