var db = require('../models');

module.exports = function(app) {
    app.get("/api/businesss", function(req, res) {
        db.Businesss.findAll({}.then(function(dbBusinesss){ 
            res.json(dbBusinesss);
        }));
      });
};
