/* PSEUDOCODE:
1. Make /api/v1/pets route and send the pets to the browser.
2. Make /api/v1/pets/:name, get name from parameters and view it.
3. Make /api/v1/pets/owner, and use req.query() to view the pet owned by that owner.
4. Make an HTML file to be viewed at /.
*/

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