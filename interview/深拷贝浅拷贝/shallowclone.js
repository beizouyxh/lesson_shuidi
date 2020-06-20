let shallowClone=(obj)=>{
    if(typeof obj !== 'object') return false;
    let newObj=obj instanceof Array ? []:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key];
        }
    }
    return newObj
}
let arr = {
    a: 'one', 
    b: ()=>{
      console.log('test')
    }
  };
let arr1=shallowClone(arr)
arr1.a='two'
console.log(arr1)