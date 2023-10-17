const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    userId:String,
    password:String,
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    },
})

module.exports = mongoose.model("Admin",adminSchema)