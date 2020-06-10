function common(arr1,arr2){
    let res=[]
    arr1.forEach(item=>{
       let resp=arr2.indexOf(item)
       if(resp>-1){
           res.push(item)
           arr2.splice(resp,1)
       }
    })
    return res
}
console.log(common([1,2,3,1],[1,2,1]))