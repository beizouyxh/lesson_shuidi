function myPromise(executor){
    this.status='pending';
    this.value=null;
    this.reason=null;
    this.onFulfilled=[];
    this.onRejected=[]

    //怎么知道调用了
    //resolve ---->fulfilled
    //reject=rejected
    let that=this;
    function resolve(value){
        console.log('resolve called');
        that.status='fulfilled';
        that.value=value;
        for(let fn of that.onFulfilled){
            fn(value)
        }
    }

    function reject(reason){
        console.log('reject called');
        that.status='rejected';
        that.reason=reason;
        for(let fn of that.onRejected){
            fn(reason)
        }
    }
    executor(resolve,reject);
}

myPromise.prototype.then=function(onFulfilled,onRejected){
    let that=this;
    if(that.status==='fulfilled'){
        onFulfilled(that.value)
    }else if(that.status==='rejected'){
        onRejected(that.reason)
    }else if(that.status==='pending'){
        //onFulfilled onRejected 先等着，等着resolve(),reject() 才会执行
        that.onFulfilled.push(onFulfilled);
        that.onRejected.push(onRejected)
    }
}

let o = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(6);
    },1000)
})

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(6666);
    },2000)
})

Promise.myAll=function (promises){
    return new Promise((resolve,reject)=>{
        let count=0;
        let res=[];
        for(let i=0;i<promises.length;i++){
            promises[i].then(x=>{
                count++;
                res[i]=x;
                if(count==promises.length){
                    resolve(res)
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    })
}

Promise.myAll([p,o]).then(x=>{
    console.log(x)
})