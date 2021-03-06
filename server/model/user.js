const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    },
},{
    timestamps: true
})

const UserAuthDB = mongoose.model('userAuth', userSchema)
module.exports = UserAuthDB