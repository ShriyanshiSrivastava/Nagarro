const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productItemSchema = new Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },

    quantity : {
        type : mongoose.Schema.Types.Number,
        default : 0
    }
});

const ProductItem = mongoose.model('ProductItem', productItemSchema);
module.exports = ProductItem;