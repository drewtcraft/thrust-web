const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3000, () => console.log('serving...'));
