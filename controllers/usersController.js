const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log(req.params)
        db.User
            .findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        console.log("I'm here - userController");
        db.User
            .create
            (req.body)
            .then(dbModel => res.json(dbModel))
            .catch((err) => {
                res.status(422).json(err);
                console.log(err);
            });
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.body._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.body._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};