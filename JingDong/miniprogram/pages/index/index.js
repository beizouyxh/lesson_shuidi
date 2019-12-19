// const db=wx.cloud.database();//上云
// const productsCollection=db.collection('products');//表 collection
const app = getApp();
Page({
  // addDate(){
  // productsCollection.add({
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
            time: '12:25'
          },
          {
            imageUrl: '../../images/p2.png',
            title: 'iPhone X',
            price: '8800元包邮',
            time: '12:25'
          }

        ]
       },
  // })
// }
  // onLoad(){
  //   console.log('onLoad');
  // },   
  // onReachBottom(){      //生命周期函数
  //   console.log('触底了');
    // const data=[...this.data.entities,
    //   ...this.data.entities,];
    //   this.setData({
    //     entities:data
      // })
  // }
})

// const db=wx.cloud.database();//上云
// const productsCollection=db.collection('products');//表 collection
// Page({
//     addDate(){
//         //api
//         productsCollection.add({
//             data:{
//                 title:`Product ${(Math.random()*100).toString()}`,
//                 price: Math.random()*1000,
//                 color:'blue',
//                 tags:["羽绒服","国际品牌"],
//                 view: Math.random()*10,
//                 image:'https://img.alicdn.com/bao/uploaded/i2/158748311/O1CN01V5og1x2BGUH68w9Gi_!!0-item_pic.jpg'
//             }

//         }).then(res => {
//             console.log(res);
//           })
//     }
// })