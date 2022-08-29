const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },

    description : {
        type : String,
        trim : true,
        default : 'product description goes here.'
    },

    url : {
        type : String,
        trim : true,
        default : 'https://isteam.wsimg.com/ip/cc897551-99e6-4130-a6dd-467fb469ee1b/ols/13855_original'
    },

    price : {
        type : mongoose.Schema.Types.Number,
        default : 0.00
    },

    category : {
        type : String,
        trim : true,
        required : true
    },

    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Review'
    }]
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;