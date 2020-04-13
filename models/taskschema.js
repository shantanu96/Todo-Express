var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    status: Number,
    group: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = taskSchema