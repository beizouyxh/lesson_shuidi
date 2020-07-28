var obj={
    data:{list:[]}
}

Object.defineProperty(obj,'list',{
    get(){
        return this.data['list']
    },
    setTimeout(val){
        console.log('值被改变了');
        this.data['list']=val
    }
})