var s1 = 'get-element-by-id';
var f = function(s) {
    //replace  /-
    return s.replace(/-\w/g, function(x) {
        //console.log(x)
        //- 不要 把第二个字符变大写
        // return x.charAt(1).toUpperCase();
        return x.slice(1).toUpperCase();

    });
}
console.log(f(s1));