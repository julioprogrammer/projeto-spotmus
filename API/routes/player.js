module.exports = function(app) {
    var player = app.controllers.player;
    app.get('/player', player.index);
};