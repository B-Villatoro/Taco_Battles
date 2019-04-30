let db = require('../models');

module.exports = function (app) {
    // Load index page
    app.get('/', function (req, res) {
        // db.taco.findAll({}).then(function(dbTacos) {
        res.render('index', {
            // msg: "Hello",
            // Tacos: dbTacos
        });
        // });
    });

    app.get('/profile', function (req, res) {
        // db.taco.findAll({}).then(function(dbTacos) {
        res.render('profile', {
            // msg: "Hello",
            // Tacos: dbTacos
        });
        // });
    });

    
    app.get('/battle', function(req, res) {
        db.taco.findAll({}).then(function(dbTacos) {
            db.user.findAll({}).then(function(dbUsers) {
                console.log(dbUsers);
                let obj = {
                    users: dbUsers,
                    allTaco: dbTacos
                };
                res.render('battleground', obj);
            }); //end db user
        }); //end db taco
    }); //end app.get

    app.get('/taco', function (req, res) {
        // db.taco.findAll({}).then(function(dbTacos) {
        res.render('createtaco', {
            // msg: "Hello",
            // Tacos: dbTacos
        });
        // });
    });

    // Load Taco page and pass in an Taco by id
    app.get('/taco/:id', function (req, res) {
        db.taco
            .findOne({ where: { id: req.params.id } })
            .then(function (dbTaco) {
                res.render('Taco', {
                    Taco: dbTaco
                });
            });
    });

    // Render 404 page for any unmatched routes
    app.get('*', function (req, res) {
        res.render('404');
    });
};
