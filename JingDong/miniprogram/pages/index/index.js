Page({
  data:{
     entities:[
      {
        imageUrl: '../../images/p2.png',
        title: 'iPhone X',
        price: '8800元包邮',
        time:'12:25'
      },
      {
        imageUrl: '../../images/p1.jpg',
        title: '耐克男鞋',
        price: '480元',
        time: '12:26'
      },
      {
        imageUrl: '../../images/p2.jpg',
        title: '曹杏脯',
        price: '10元',
        time: '12:56'
      
      },
       {
         imageUrl: '../../images/p2.png',
         title: 'iPhone X',
         price: '8800元包邮',
         time: '12:56'
       },
       {
         imageUrl: '../../images/p1.jpg',
         title: '耐克男鞋',
         price: '480元',
         time: '12:56'
       },
       {
         imageUrl: '../../images/p2.jpg',
         title: '曹杏脯',
         price: '10元',
         time: '12:56'
       }
      
      
     ]
  },
  onLoad(){
    console.log('onLoad');
  },   
  onReachBottom(){      //生命周期函数
    //console.log('触底了');
    const data=[...this.data.entities,
      ...this.data.entities,];
      this.setData({
        entities:data
      })
  }
})