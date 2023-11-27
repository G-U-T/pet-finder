const express = require('express');
const data = require('./data');

const PORT = 7777;
const app = express();
app.listen(PORT, () => {
	console.log(`Port ${PORT}`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});