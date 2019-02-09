const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    weight: Number,
    height: Number,
    age: { type: Number, min: 14, max: 65 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
