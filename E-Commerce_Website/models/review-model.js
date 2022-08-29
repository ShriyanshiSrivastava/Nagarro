const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    subject : {
        type : String,
        default : 'No Subject'
    },

    feedback : {
        type : String,
        default : 'No feedback'
    },

    rating : {
        type : mongoose.Schema.Types.Number,
        default : 1
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;