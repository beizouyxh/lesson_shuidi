- 删除排序数组中的重复项
   读题： 排序数组sortedArr[1,1,2]   length=3
          return length=2

    - 一次遍历？
      result[]  结果数组  空间复杂度O（n）
      for
      排好序 后面的项一定会大于或等于前面的项  等于的项要原地删除
      返回result的长度 
      抽象 数理逻辑

    - 动图
    两个指针  pre  cur
    cur 一直在往前跑 一次循环的每一次遍历
    pre 后面追
    pre cur 对于arr来说 前一个，后一个
    不等于pre+1 
    相等的时候pre不走
    如果cur pre 不一样，那么pre+1 等于cur的值
    从头到尾都是拍好序的的不重复数
    每个位置放什么数？
    pre 指针没有跟上cur的速度，表示有重复
    pre cur n个空位
    pre+1 删除，把当前cur 的值交给pre

    - 快慢指针
    1. 一次循环 cur++一直跑
    2. cur 跟 pre arr[] 不等的话 pre++ cur++
       相等的话 pre 不动
    3. cur在走的时候，继续比较
      新的cur 跟旧的pre
      不等时 pre++ 并把新的cur 的值给 新的pre
      把因为之前重复的空出来的位置 给填上
    4. cur > pre


- 数据结构 链表
[1,1,2]链表
LinkedList next
1  1 第一个1的next指针1改为指向2

把数组要维持位置 快要