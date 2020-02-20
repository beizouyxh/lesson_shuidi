// 电商设计？ 模型层  mongoose
// products  商品  collection
// 小米   商家  
// 1.new Schema save 存好数据
//设计数据库模型
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;


const productSchema = Schema({ //表一   产品
        id: ObjectId, //唯一
        name: String,
        image: String,
        price: Number,
        description: String,
        //非关系型数据库  NOsql
        manufacturer: { type: ObjectId, ref: 'Manufacturer' }
    })
    //mysql 关系型数据库？   一对多
const manufacturerSchema = Schema({ //表2 厂家
    id: ObjectId,
    name: String,
})


// 2.生成模型类映射 数据库表
const Product = mode('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = {
    Product,
    Manufacturer
}