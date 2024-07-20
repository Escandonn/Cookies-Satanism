const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.post('/cookies', (req, res) => {
    const cookies = req.body;
    fs.writeFileSync(path.join(__dirname, 'cookies', 'cookies.json'), JSON.stringify(cookies));
    res.send('Cookies recibidas');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});