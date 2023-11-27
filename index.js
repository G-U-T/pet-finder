/* PSEUDOCODE:
1. Make /api/v1/pets route and send the pets to the browser.
2. Make /api/v1/pets/:name, get name from parameters and view it.
3. Make /api/v1/pets/owner, and use req.query() to view the pet owned by that owner.
4. Make an HTML file to be viewed at /.
*/

const express = require('express');
const data = require('./data');

const PORT = 3354;
const app = express();
app.listen(PORT, () => {
	console.log(`Port ${PORT}`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api/v1/pets', (req, res) => {
	res.send(data);
});

// Had to add an extra pet/ in there becase it conflicted with pets/owner
app.get('/api/v1/pets/pet/:name', (req, res) => {
	let petFromName;
	data.forEach((pet) => {
		if (pet.name === req.params.name) petFromName = pet;
	});
	res.send(petFromName);
});

app.get('/api/v1/pets/owner', (req, res) => {
	console.log(req.query, req, res);
	let petFromOwner;
	data.forEach((pet) => {
		if (pet.owner === req.query.name) petFromOwner = pet;
	});
	res.send(petFromOwner);
});