var mongoose = require("mongoose")
var taskSchema = require('./taskSchema')

var groupSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema]
})

var Group = mongoose.model('groups', groupSchema)
module.exports = Group