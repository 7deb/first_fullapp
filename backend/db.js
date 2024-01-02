const mongoose = require("mongoose");
const { boolean, Schema } = require("zod");

try {
    mongoose.connect("mongodb+srv://admin:DEB07banerJEE@cluster0.lhwmubf.mongodb.net/my_app")
    console.log("connected to the database")
} catch (error) {
    console.log("could not connect to the database")
}
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}