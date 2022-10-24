const express = require('express');
const http = require('http');

const app = new express();

const server = http.createServer(app);
const port = process.env.port || 80;

app.use(__dirname + '/src');

app.get('/', (req, res) => {
    res.sendFile('/src/main/index.html');
});

server.listen(port, () => console.log('Listening to '+ port)); 