const express = require('express');
const path = require('path');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/:files/:name', (req, res) => {
	const { files, name } = req.params;
	console.log(name);
	const src = path.join(__dirname, `../public/${files}/${name}`);
	res.sendFile(src);
});

module.exports = router;
