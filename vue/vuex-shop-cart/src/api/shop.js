// 卖什么？
// vuex 大型应用
// 物流独立开来？ 京东

//vue 页面  （店，前台）
//数据驱动  
//vuex 仓库
//backend  :3000端口/api/products  假数据
const _products = [
    { "id": 1, "title": "ipad4 mini", "price": 1800, "inventory": 5 },
    { "id": 2, "title": "T-Shirt", "price": 36, "inventory": 10 },
    { "id": 3, "title": "iphone", "price": 5400, "inventory": 10 },
];
export default {
    //backend  callback
    getProducts(cb) { //接口
        // console.log(cb);
        //模拟ajax过程
        setTimeout(() => cb(_products)

            , 1000)
    }
}