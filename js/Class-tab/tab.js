var that;
class Tab{
   constructor(id){
      //获取元素
      that=this;
      this.main= document.querySelector(id)
      this.lis=this.main.querySelectorAll('li')
      this.sections=this.main.querySelectorAll('section')
      this.add=this.main.querySelector('.tabadd')
      //li 的父元素
      this.ul=this.main.querySelector('.fisrstnav  ul:first-child');
   }
   init(){
       //init 初始化操作让相关的元素绑定事件
       this.add.onclick=this.addTab;
       for(let i=0; i<this.lis.length;i++){
           this.lis[i].index=i;
           this.lis[i].onclick=this.toggleTab;
            //    console.log(this.index)
           
       }
   }
//    1.切换功能
   toggleTab(){
    //  console.log(this.index)
     that.clearClass();
     this.className='liactive'
     that.sections[this.index].className='conactive'
   }
   clearClass(){
       for(let i=0;i<this.lis.length;i++){
           this.lis[i].className=''
           this.sections[i].className=''
       }
   }
//    2.添加功能
   addTab(){
    //1. 创建li元素和section元素
    var li=' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
    //2.把这两个元素追加到相应的父元素里面
    that.ul.insertAdjacentHTML('beforeend',li);
}
 //   3. 删除功能
   removeTab(){

   }
//     4. 修改功能
   delTab(){
       
   }
}
var tab=new Tab('#tab');
tab.init()
