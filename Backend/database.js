const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://28skofficial01:iyb2YpBGFXetQZzm@inventory.mpyiejj.mongodb.net/TodoApp")
const TodoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('TodoApp',TodoSchema);

module.exports ={
    todo
}