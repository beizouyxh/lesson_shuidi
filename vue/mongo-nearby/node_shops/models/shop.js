const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //必填
            // index:true
    },
    location: {
        type: [Number], //[纬度，经度]
        index: "2d", //索引
        sparse: true
    }
})

const shop = mongoose.model('shop', shopSchema)

module.exports = shop;