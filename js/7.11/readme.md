1. 既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢
2. Number 范围
3. 实现 lodash 的_.get
4. Promise.all中任何一个Promise出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用。你有什么解决办法么
5. xss

### 1. 既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢
vue： 数据变化只知道哪个组件需要更新，但是不知道组件的具体哪个需要更新，需要借助DOM diff
  依赖收集（哪个地方依赖这个数据），知道哪些地方需要更新。vue 数据源比较多，如果收集依赖，粒度非常细，导致【依赖】占用内存特别大，尽量收集的粒度不那么细，收集到组件级别。

### 2.number 范围（dobule）
    数组长度 不能超出2^32 -1

### 实现 lodash 的_.get
```js
    let obj={
        a:{
            b:{
                c:1
            },
            d:[1,2]
        }
    }
    console.log(get(obj,'a.b.c'))
    console.log(get(obj,'a.d[3]'));

    function get(source,path){
        try{
            let paths=path.split('.');
            let res=source;
            for(let key of paths){
                res=res[key]
            }
            return res;
        }catch{
            return undefined
        }
    }
```

###  Promise.all中任何一个Promise出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用。你有什么解决办法么
1.allSetlled
2.promise 定义的时候，都采取resolve形式，自己在 then 回调里面判断结果可用与否

### XSS