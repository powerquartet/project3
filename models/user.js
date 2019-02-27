const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    weight: Number,
    height: Number,
    age: Number,
    sex: String,
    activityLevel: Number,
    plan: String,
    portions: String,
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;