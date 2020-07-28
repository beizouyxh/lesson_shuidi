function myAll(arr){
    return new Promise((resolve,reject)=>{
        let count=0;
        let res=[]
        for(let pro of arr){
            pro.then((r)=>{
                count++;
                res.push[r];
                if(count==arr.length){
                    resolve(res)
                }
            }).catch(err=>{
                reject(err)
            })
        }
    })
}