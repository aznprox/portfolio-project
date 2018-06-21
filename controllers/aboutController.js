const db = require('../models');

// Defining methods for the aboutController
module.exports = {
    findAll: function(req, res) {
      db.About
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}