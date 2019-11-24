// 设计一个栈 Stack
// 支持push pop top 
// 获取最小值
function Min_stack(){
    this.stack=[];   //使用数组模拟栈
    this.min= Number.MIN_VALUE;
}

Min_stack.prototype.push=function(x){
    if(x<this.min){
        this.min=x;
    }
    return this.stack.push(x);
}
Min_stack.prototype.pop=function(){
    const item= this.stack.pop();
    return item;
}
Min_stack.prototype.top=function(){
    return this.stack[this.stack.length-1];
}
Min_stack.prototype.toString=function(){
    return this.stack.join(',');
}
Min_stack.prototype.getMin=function(){
    return this.min;
}

var min_stack=new Min_stack();
min_stack.push(-2);
min_stack.push(0);
min_stack.push(-3);
console.log(min_stack.toString());
console.log(min_stack.getMin());