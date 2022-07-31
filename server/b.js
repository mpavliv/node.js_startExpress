const express = require('express');
bodyParser = require('body-parser');
snBase = require('./sn_db_controller');

const PORT = 8080;

const app = express();
app.use('/fileSn', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    console.log('Request body:', req.body);

    res.end('finished');
  });


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
    console.log('fileSn');
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


