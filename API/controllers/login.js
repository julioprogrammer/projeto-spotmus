module.exports = function(app) {
    var LoginController = {
        index: function(req, res) {
            res.render('login/index');
        },
        dash: function(req, res){
            res.render('dashboard/index');
        }
    };
    return LoginController;
};