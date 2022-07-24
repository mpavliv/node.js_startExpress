const express = require('express')
bodyParser = require('body-parser')
const PORT = 8080;
let sn;
sn = new Set()

const app = express();
app.use(express.urlencoded({ extended: true, }));
app.use(bodyParser.text({type: 'text/plain'}))
  
//app.use(express.json());


app.get('/sn', (req, res) => {
    res.send(Array.from(sn));
})

app.post('/sn', (req, res) => {
    if (!req.body) {
        console.log('no body in require');
        return res.sendStatus(400);
    }
    receivedData = req.body;
    sn.add(req.body) 
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})

