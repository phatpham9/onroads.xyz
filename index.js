var express = require('express');
var app = express();
var port = process.env.PORT || 9000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(express.static(__dirname));
app.get('/', function (req, res) {
	res.render('index.html');
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
