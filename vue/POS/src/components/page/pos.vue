<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
           <el-tab-pane label="点餐">
              <el-table border style="width=100%" :data="tableData">
                  <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                   <el-table-column prop="count" label="商品数量"></el-table-column>
                   <el-table-column prop="price" label="金额"></el-table-column>
                    <el-table-column prop="caozuo" label="操作" fixed="right">
                      <template>
                          <el-button type="text" size="small">添加</el-button>
                          <el-button type="text" size="small">删除</el-button>
                      </template>
                    </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                 <el-button type="danger">删除</el-button>
                  <el-button type="success">结账</el-button>
              </div>

           </el-tab-pane>

           <el-tab-pane label="挂单"></el-tab-pane>
           <el-tab-pane label="外卖"></el-tab-pane>

        </el-tabs>
      </el-col>


       <el-col :span="17">
         <div class="often-goods">
           <div class="title">常用商品</div>
           <div class="often-goods-list">
             <ul>
               <li v-for="goods in oftenGoods">
                 <span>{{goods.goodsName}}</span>
                 <span class="o-price">￥{{goods.price}}元</span>
               </li>
             </ul>
           </div>
         </div>


         <div class="goods-type">
           <el-tabs >
             <el-tab-pane label="汉堡">
               <div>
                <ul class='cookList'>
                  <li v-for="goods in type0Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
               </div>
             </el-tab-pane>
             <el-tab-pane label="小吃">
             小吃
             </el-tab-pane>
             <el-tab-pane label="饮料">
              饮料
             </el-tab-pane>
             <el-tab-pane label="套餐">
              套餐
             </el-tab-pane>
           </el-tabs>
         </div>
   
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'pos',
  data(){
    return{
      tableData:[{
        goodsName:'香辣鸡腿堡',
        price:15,
        count:1
      },{
        goodsName:'爱心薯条',
        price:8,
        count:1
      },{
        goodsName:'甜筒',
        price:8,
        count:1
      },{
        goodsName:'墨西哥鸡肉卷',
        price:15,
        count:1
      }

      ],
      oftenGoods:[
        {
          goodsId:1,
          goodsName:'香辣鸡腿堡',
          price:16
        },
        {
           goodsId:2,
          goodsName:'墨西哥鸡肉卷',
          price:16
        },
         {
          goodsId:3,
          goodsName:'可口可乐',
          price:5
        },
         {
          goodsId:4,
          goodsName:'奥尔良烤翅',
          price:12
        },
         {
          goodsId:5,
          goodsName:'蜜汁全鸡',
          price:30
        },{
          goodsId:6,
          goodsName:'香脆鸡柳',
          price:12
        },{
          goodsId:7,
          goodsName:'脆皮炸鸡腿',
          price:15
        },{
          goodsId:8,
          goodsName:'快乐全家桶',
          price:88
        },{
          goodsId:9,
          goodsName:'鸡米花',
          price:12
        },{
          goodsId:10,
          goodsName:'香订咖啡',
          price:18
        },
        {
          goodsId:11,
          goodsName:'香辣鸡排',
          price:18
        }
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"https://img.yzcdn.cn/upload_files/2015/05/05/FvN5kBeDSKF2yOEaio02J95oovM2.jpg!large.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"https://img.yzcdn.cn/upload_files/2015/05/05/FvN5kBeDSKF2yOEaio02J95oovM2.jpg!large.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"https://img.yzcdn.cn/upload_files/2015/05/05/FvN5kBeDSKF2yOEaio02J95oovM2.jpg!large.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://img.mp.itc.cn/upload/20161028/146fe5b12ac54577a841700d18c068a7_th.jpeg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://img.mp.itc.cn/upload/20170706/cc984a3914854e1893b4b8533a1f2042_th.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://p0.ifengimg.com/pmop/2017/0904/849DB0830063C2A7717D31667CA9C70F8AF660FF_size76_w1024_h650.jpeg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"https://s3.ifanr.com/wp-content/uploads/2018/03/coke-e1520663411980.jpg!720",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://5b0988e595225.cdn.sohucs.com/images/20171021/856c85b583ba4671a2988145ac594a39.jpeg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"https://d10.yihaodianimg.com/N05/M02/6C/0D/CgQI01VcRqCADvLYAAXSk4H4ROY10800_640x640.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://img3.21food.cn/img/album/2015/10/17/hongtaifood1446011.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }

      ],
    }
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById('order-list').style.height=orderHeight+'px';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-order{
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
}
.div-btn{
  margin-top: 10px;
}
.title{
  height: 20px;
  border-bottom: 1px solid #D3dce6;
  background: #F9FAFC;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li{
  list-style: none;
  float: left;
  border: 1px solid #E5E9F2;
  padding: 10px;
  margin: 10px;
  background-color: #FFFFFF;
}
.o-price{
  color: #58B7FF;
}

.goods-type{
  clear: both;
}

.cookList li{
       list-style: none;
       width:200px;
       border:1px solid #E5E9F2;
       height: 80px;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;

   }
   .cookList li span{
 
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;

   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
