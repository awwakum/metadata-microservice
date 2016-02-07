var express = require('express');
var path = require('path');
var routes = require('./controllers/index');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port, function() {
	console.log('server running on ' + port);
});