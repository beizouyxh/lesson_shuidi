// var=2 ; 变量查询 LHS查询
// LHS:视图找到变量的容器本身，从而对其赋值
// RHS：简单的查找某个变量的值别无二致    = 右侧
function chageObjProperty(o) {   //o 形参LHS RHS
    o.siteUrl = "http://www.baidu.com";
    o = new Object();   //LHS
    o.siteUrl = "http://www.google.com";
  }
  
  
  let webSite = new Object();
  chageObjProperty(webSite);
  console.log(webSite.siteUrl);     //baidu.com