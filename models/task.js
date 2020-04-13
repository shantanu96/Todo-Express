var mongoose = require('mongoose')
var taskSchema = require('./taskSchema')

// var taskSchema = new mongoose.Schema({
//     title: String,
//     status: Number,
//     group: String,
//     createdAt: { type: Date, default: Date.now }
// })

var Task = mongoose.model('tasks', taskSchema)
module.exports = Task