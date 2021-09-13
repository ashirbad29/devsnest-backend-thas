const express = require('express');
const app = express();

const port = 5050;

app.get('/', (req, res) => {
	res.send('Hello world');
});

// to send data as json
app.get('/json', (req, res) => {
	res.json({
		name: 'John',
		age: '69',
	});
});

app.get('/something', (req, res) => {
	res.status(200).send('You should get a 200 OK');
});

// receiving query paramenets
app.get('/query', (req, res) => {
	console.log(req.query);
	res.status(200).send(req.query);
});

//params
app.get('/team/:code', (req, res) => {
	const { code } = req.params;
	if (code == 1) {
		res.send('Welcome to Async Team');
		return;
	}

	res.send('Incorrect CODE!');
});

app.listen(port, () => {
	console.log(`server is up on http://localhot:${port}`);
});
