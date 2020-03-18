const _products = [
    { "id": 1, "title": "ipad4 mini", "price": 1800, "inventory": 5 },
    // { "id": 2, "title": "T-Shirt", "price": 36, "inventory": 10 },
    // { "id": 3, "title": "iphone", "price": 5400, "inventory": 10 },
];
export default {
    getProducts(cb) { //接口
        setTimeout(() => cb(_products), 1000)
    }
}