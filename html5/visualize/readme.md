- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏开发中使用requestAnimationFrame来代替setInterval
  function animation(){
      console.log('------');
      requestAnimationFrame(function(){
          animation();   递归（自己调用自己）会导致内存泄漏
       })   
  }
- canvas画布
  有绘制的API  画布的默认大小