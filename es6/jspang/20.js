// function test(o) {
//     var i = 0; // i在整个函数体内均是有定义的
//     if (typeof o == "object") {
//         var j = 0; // j在函数体内是有定义的，不仅仅是在这个代码段内
//         for (var k = 0; k < 10; k++) { // k在函数体内是有定义的，不仅仅是在循环内
//             console.log(k); // 输出数字0~9
//         }
//         console.log(k); // k已经定义了，输出10
//     }
//     console.log(j); // j已经定义了，但可能没有初始化
// }
// test([1,2,3,4,5,6])


var color = "blue";

function changeColor(){
    var anotherColor = "red";

    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        console.log('tempColor:' + tempColor)     //red
        console.log('anotherColor:'+ anotherColor)   //blue
        console.log('color:'+ color)      //red
        // 这里可以访问color、anotherColor和tempColor
    }

    // 这里可以访问color和anotherColor，但不能访问tempColor
    swapColors();
}

// 这里只能访问color
changeColor();


// var color = "blue";

// function changeColor(){
//     if (color === "blue"){
//         color = "red";
//     } else {
//         color = "blue";
//     }
// }

// console.log(changeColor());
