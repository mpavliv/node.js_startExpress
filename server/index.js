const express = require('express')
const PORT = 8080;

const app = express();

app.get('/sn', (req, res) => {
    res.send('responce serial nomber');
})

app.post('/sn', (req, res) => {
    if (!req.body) return response.sendStatus(400);
    console.log(request.body);
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})

