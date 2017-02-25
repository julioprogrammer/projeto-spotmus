module.exports = function(app) {
    var PayerController = {
        index: function(req, res) {
            res.render('player/index');
        }
    };
    return PayerController;
};