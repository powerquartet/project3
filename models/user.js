const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    weight: Number,
    height: Number,
    age: { type: Number },
    sex: String,
    activityLevel: { type: Number }
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;