const mongoose = require('mongoose');
//硬盘 ，物理
const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: String,
    /*封面 url比较大  jpg*/
    rating: String,
    introduction: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie