var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var upload = multer({ 
	dest: __dirname + '/../public/uploads',
	limits: { filesize: 1000000, files: 1 },
});

router.get('/', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/html');
	res.sendFile('index.html');
});

router.post('/upload', upload.single('your file'), function(req, res) {
	res.set('Content-type', 'text/json');
	res.send(JSON.stringify(req.file, '', 3));
	fs.unlink(req.file.path, function(err) {
		if (err) 
			return console.error(err);
		console.log('File deleted succesfully!');
	});
});

module.exports = router;