const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//jwt
const UserSchema=new Schema({
    username:String,
    password:String,
    // token 在客户端可以localStorage.setItem()拿到
    token:String
})

module.exports=mongoose.model('User',UserSchema)