var findTheLongestSubstring = (str) => {
    let res = 0 
    let state = 0 // 前缀区间的state状态
    let vowel = { a: 1, e: 2, i: 4, o: 8, u: 16 } // 对照表
    let map = { 0: -1 } // map存放各个前缀区间的state
    for (let i = 0; i < str.length; i++) { // 遍历str串
        let char = str[i] // 获取当前遍历的字符
        if (vowel[char] !== undefined) { // 当前遍历的字符是元音
            state ^= vowel[char] // 求出当前前缀区间的state
            if (map[state] === undefined) { // 当前state没存过
                map[state] = i // 存入该state，和对应的位置
            }
        }
        let distance = i - map[state] //求距离，即满足条件的子串长度
        res = Math.max(res, distance) // 试图刷新最长记录
    }
    return res
}