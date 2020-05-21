var longestPalindrome = function(s) {
    if(!s || s === "") return s;
    let max = s[0];//最长回文子串
    let loop = 0;//循环次数

    while(loop < s.length) {
        let idx = loop;//开始下标
        let n = 0;//向两边扩展的累计变量
        //从开始下标向两边扩展的累计变量
      
        //相同的个数 
        //例如 aaa"a"aac same为2
        //     aac"a"cac same为0
        let same = 0;
        //例如 caaca"a"acaab same为1 如果没有这个判断终止same为4
        let isBreak  = false;
        //先正常遍历 同时算出same （此时中心为1个数）
        while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 1]){
            //当没有中断且下一个字符与开始下标字符相等，same累计
            if(!isBreak && s[idx] == s[idx + n + 1]){
                same++;
            }else{
                isBreak = true;
            }
            n++;
        }
        max =  n * 2 + 1 > max.length ? s.slice(idx - n, idx + n + 1) : max;
        //当存在与开始下标连续且相同的字符，且前等后不等（此时中心为2个数）
        //例如 abc"c"ccdd 条件满足same为1 这个时候就把中间的两个c 当成中心,再开始向两边扩展
        //     abcc"c"cdd 条件不满足same为1，因为与 abc"c"ccdd 重复了，没必要再走一遍
        //     a"a"aa 条件满足same为1 
        if(s[idx] == s[idx + same + 1] && s[idx] != s[idx - same - 1]){
            n = same;
            while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 2]){
                n++;
            }
            max =  n * 2 + 2 > max.length ? s.slice(idx - n, idx + n + 2) : max;
        }
        loop++;
    }
    return max;
};
