const express = require('express');
const http = require('http');

const app = new express();

const server = http.createServer(app);
const port = process.env.port || 80;

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/main/main.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/src/main/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/src/main/index.html');
});

server.listen(port, () => console.log('Listening to '+ port)); 