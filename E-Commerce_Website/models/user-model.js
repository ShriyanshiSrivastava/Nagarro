const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String,
        trim : true,
        required : true
    },
    lastName : {
        type : String,
        trim : true,
        required : true
    },
    username : {
        type : String,
        trim : true,
        required : true
    },
    googleID : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    profilePic : {
        type : String,
        default : '/images/profilePic.jpeg'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;