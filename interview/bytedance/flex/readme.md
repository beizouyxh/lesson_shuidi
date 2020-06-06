# flex空间分配规则
 - flex-shrink值乘自身宽度比
 - flex-grow 值的比

flex-grow  伸
弹性布局  flex-shrink   缩

left +right > container 的宽度    比例 5： 4


1. flex-shrink  2:1宽度是什么
  计算
    -  500+400-600=300px
    - left right 分担超出的比例部分    500x2 : 400x1 = 5:2
    - left= 500-300*5/7=285.72   right=400 - 300*2/7=314

2. 盒子padding子元素，计算方式就要变了，标准盒模型
  left
  - 500+2*40 +400 +2*20 -600=420
  - 分配比率 不包含padding 5:2
  - left= 580-420*5/7=280   right=440-420*2/7=320

3. box-sizing:box-border  IE模型
   500+400-600=300
   - 超出部分分配   2*420:360x1=  7:3
   - left:500-300x7/10=290     right 400-300x3/10=310



5. flex-grow
   按值的比例分配