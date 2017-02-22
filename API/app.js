var express = require('express')
,	load = require('express-load')
,	app = express();

// ... stack de configurações do servidor
load('models')
	.then('controller')
	.then('routes')
	.into(app);

// ... subindo o servidor
app.listen(3000, function () {
	console.log('Servidor Online');
});