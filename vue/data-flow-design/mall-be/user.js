var mongoose = require('mongoose')
    //包容前期的设计冗余  移动时代数据不规整，需要动态调整
    // login register
const userSchema = new mongoose.Schema({
    'userId': String, //生成唯一的用户id
    'name': String,
    'avater': String,
    "userName": String,
    "userPwd": String,
    //杂糅
    "cartList": [{
        productId: String,
        productImg: String,
        productName: String,
        checked: String,
        productNum: Number,
        productPrice: Number
    }],
    'addressList': [{
        "addressId": Number,
        "userName": String,
        "streetName": String,
        "tel": Number,
        "isDefault": Boolean
    }]
})
module.exports = mongoose.model('User', userSchema);