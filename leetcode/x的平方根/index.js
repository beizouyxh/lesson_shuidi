//二分法
var mySqrt = function(x) {
    if(x==0 || x==1){
        return x
    }
    var left=1;
    var right=x;
   
    while(left<=right){
        var middle=left+((right-left)>>1);
        if(middle*middle==x){
            return middle;
        }else if(middle*middle>x){
            right=middle-1;
        }else{
            left=middle+1;
        }
    }
    return right;
}
console.log('jjj')
console.log(mySqrt(10));