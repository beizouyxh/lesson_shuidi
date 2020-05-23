//  字符串模板

//es5
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
// console.log(blog)



//es6
// let jspang='技术胖';
// let blog = `非常高兴你能看到这篇文章，
// 我是你的老朋友${jspang}。
// 这节课我们学习字符串模版。`;
// console.log(blog);

// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// console.log(blog.indexOf(jspang));  //20


let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(blog.includes(jspang));

// includes  //是否存在
// startWith   //开头是否存在
// endWith    //结尾是否存在
// repeat      //复制字符串