const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    productItems : [{
        product : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        },
        quantity : {
            type : mongoose.Schema.Types.Number
        }
    }],

    totalPrice : {
        type : mongoose.Schema.Types.Number,
        default : 0.00
    },

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

    email : {
        type : String,
        trim : true,
        required : true
    },

    phoneNo : {
        type : String,
        trim : true,
        required : true
    },

    address : {
        type : String,
        trim : true,
        required : true
    },

    city : {
        type : String,
        trim : true,
        required : true
    }, 

    state : {
        type : String,
        trim : true,
        required : true
    }, 
    
    country : {
        type : String,
        trim : true,
        required : true
    },

    zipCode : {
        type : String,
        trim : true,
        required : true
    }
}, {timestamps : true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;