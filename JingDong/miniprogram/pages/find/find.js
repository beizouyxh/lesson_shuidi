const app=getApp();
Page({
  data:{
    currentTab:0,
    navScrollLeft:0,
    navData:[
      {
        id:1,
        name:'全部'
      },
      { 
        id:2,
        name:'日用百货'
      },
      {
        id:3,
        name:'食品保健'
      },
      {
        id:3,
        name:'家用电器'
      },
      {
        id:3,
        name:'电脑数码'
      },
      {
        id:3,
        name:'个护化妆'
      },
      {
        id:3,
        name:'母婴用品'
      },
      {
        id:3,
        name:'家居家装'
      },
      {
        id:3,
        name:'服饰鞋包'
      },
      {
        id:3,
        name:'办公设备'
      },
      {
        id:3,
        name:'运动户外'
      },
      {
        id:3,
        name:'图书影像'
      },
      {
        id:3,
        name:'玩模乐器'
      },
      {
        id:3,
        name:'礼品钟表'
      },
      {
        id:3,
        name:'汽车用品'
      },
      {
        id:3,
        name:'金融旅游'
      },
      

]
},
  // showUser(){
  //   console.log(app);
  //   //用户如何点击了授权，就显示小家
  //   //如果没有则显示登陆
  //  wx.navigateTo({
  //    url:"/pages/login/login"
  //  })
  // },
  // onLoad(){
  //   wx.request({
  //     // url:'http://localhost:1314/indexPage',
  //     success:(res)=>{
  //      // console.log(res);
  //      const navData=res.data.navData;
  //      this.setData({
  //        navData
  //      })

  //     }
  //   })
  // },
  switchNav(e){
    const cur =e.currentTarget.dataset.id;
    //console.log(cur);
    this.setData({
      currentTab:cur
    })
  }
})