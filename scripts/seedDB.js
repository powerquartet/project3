const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const userSeed = [
    {
        firstName: 'Mary Jane',
        lastName: 'Watson',
        email: 'maryjane@spiderverse.com',
        weight: 110,
        height: 63,
        Age: 25
    },
    {
        firstName: 'Peter',
        lastName: 'Parker',
        email: 'peter@spiderverse.com',
        weight: 180,
        height: 72,
        Age: 25
    },
    {
        firstName: 'Mae',
        lastName: 'Parker',
        email: 'auntmae@spiderverse.com',
        weight: 130,
        height: 60,
        Age: 40
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
