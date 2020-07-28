class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName()
    }
    getName(){
        return this.name;
    }
}
//代理实现单例模式
var ProxyMode=(()=>{
   var instance=null;
   return function(name){
       if(!instance){
           instance=new CreateUser(name)
       }
       return instance
   }

})();
// 测试单例模式的实例
var a = new ProxyMode('aaa');
var b =new ProxyMode('bbb');
// 因为单例模式只实例化一次，所以下面的实例是相等的
console.log(a===b);