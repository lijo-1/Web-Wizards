const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
    userId:String,
    password:String,
    updatedAt:Date.now(),
})

module.exports = mongoose.model("Staff",StaffSchema)