var express = require('express')
,	load = require('express-load')
,	app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// ... stack de configurações do servidor
load('models')
	.then('controllers')
	.then('routes')
	.into(app);

// ... subindo o servidor
app.listen(3000, function () {
	console.log('Servidor Online');
});