const mongoose = require('mongoose');
const { Schema } = mongoose;

const modeSchema = new Schema({
    userName : String,
    userEmail :{
        type :String,
        require:true
    },
    userPassword: String
})

module.exports = mongoose.model("Item",modeSchema)