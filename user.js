const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    name : String,
    age: Number
})

mongoose.model("User", userSchema)