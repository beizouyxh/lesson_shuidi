// // var=2 ; 变量查询 LHS查询
// // LHS:视图找到变量的容器本身，从而对其赋值
// // RHS：简单的查找某个变量的值别无二致    = 右侧
// function chageObjProperty(o) {   //o 形参LHS RHS
//     o.siteUrl = "http://www.baidu.com";
//     o = new Object();   //LHS
//     o.siteUrl = "http://www.google.com";
//   }
  
  
//   let webSite = new Object();
//   chageObjProperty(webSite);
//   console.log(webSite.siteUrl);     //baidu.com
function intersect (ary1, ary2) {
  let longAry, shortAry
  // 不取长短数组也行吧。
  if (ary1.length > ary2.length) {
    longAry = ary1
    shortAry = ary2
  } else {
    longAry = ary2
    shortAry = ary1
  }
  let tmpAry = []
  try {
    longAry.forEach(el => {
      if (shortAry.length === 0) {
        throw new Error('short array.lenth === 0')
      }
      let index = shortAry.indexOf(el)
      if (index > -1) {
        // 短数组中存在元素的情况
        shortAry.splice(index, 1)
        tmpAry.push(el)
      }
    })
  } catch (error) {
    console.log(error)
  }
  return tmpAry
}
console.log(intersect([1, 2, 2, 1], [2]))