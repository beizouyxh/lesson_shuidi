function instance(obj,constructor){
    let prototype=constructor.prototype;
    if(obj===prototype) return true
    let proto=obj.__proto__;
    if(proto === null){
        return false
    }
    return instance(proto,constructor)
}

console.log(instance(Array,Function))