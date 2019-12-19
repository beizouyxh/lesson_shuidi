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
],
 entities: [
      {
        imageUrl: '../../images/p2.png',
        title: 'iPhone X',
        price: '8800元包邮'
      },
      {
        imageUrl: '../../images/p1.jpg',
        title: '耐克男鞋',
        price: '480元',
        time:'13:24'
      },
   {
     imageUrl: '../../images/p2.png',
     title: 'iPhone X',
     price: '8800元包邮',
     time:'12:45'
   },
   {
     imageUrl: '../../images/p1.jpg',
     title: '耐克男鞋',
     price: '480元',
     time:'13:12'
   },
   {
     imageUrl: '../../images/p2.jpg',
     title: '曹杏脯',
     price: '10元',
     time:'16:28'
   }


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
  },
  onLoad() {
    console.log('onLoad');
  },
  // onReachBottom() {      //生命周期函数
  //   //console.log('触底了');
  //   const data = [...this.data.entities,
  //   ...this.data.entities,];
  //   this.setData({
  //     entities: data
  //   })
  // }
  
})