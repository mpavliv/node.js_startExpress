const express = require('express');
//bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
snBase = require('./sn_db_controller');

const PORT = 8080;

const app = express();
// app.use( bodyParser.json({limit: '50mb'}) );
// //app.use(bodyParser.text({type: 'text/plain', limit: '50mb'}))
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//app.use(express.json());
app.use(fileUpload());


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
    res.sendStatus(200);
})


app.post('/fileSn', (req, res) => {
    console.log(fileSn);
    if (!req.body) {
        console.log('no body in require');
        return res.sendStatus(400);
    }
    receivedData = req.body;
    console.log(receivedData);
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})


