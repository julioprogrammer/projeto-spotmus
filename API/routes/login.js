module.exports = function(app) {
    var login = app.controllers.login;
    app.get('/', login.index);
    app.post('/entrar', login.dash);
};