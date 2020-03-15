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
               <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
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
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
               </div>
             </el-tab-pane>
             <el-tab-pane label="小吃">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)"> 
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
             </el-tab-pane>
             <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
             </el-tab-pane>
             <el-tab-pane label="套餐">
              <ul class='cookList'>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
              </ul>
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
       tableData:[],
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
          }
      ],   
      type1Goods:[
         {
              goodsId:1,
               goodsImg:"https://d10.yihaodianimg.com/N05/M02/6C/0D/CgQI01VcRqCADvLYAAXSk4H4ROY10800_640x640.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:2,
               goodsImg:"http://img3.21food.cn/img/album/2015/10/17/hongtaifood1446011.jpg",
              goodsName:'香脆鸡柳',
              price:17
          },
          {
              goodsId:3,
               goodsImg:"http://p0.ifengimg.com/pmop/2017/0904/849DB0830063C2A7717D31667CA9C70F8AF660FF_size76_w1024_h650.jpeg",
              goodsName:'魔法鸡块',
              price:20
          }
      ],
      type2Goods:[
            {
              goodsId:1,
               goodsImg:"https://s3.ifanr.com/wp-content/uploads/2018/03/coke-e1520663411980.jpg!720",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:2,
               goodsImg:"http://5b0988e595225.cdn.sohucs.com/images/20171021/856c85b583ba4671a2988145ac594a39.jpeg",
              goodsName:'雪顶咖啡',
              price:18
          }
      ],
      type3Goods:[
             {
              goodsId:1,
               goodsImg:"http://img.mp.itc.cn/upload/20161028/146fe5b12ac54577a841700d18c068a7_th.jpeg",
              goodsName:'快乐全家桶',
              price:80
        }
      ]
     }
  },
   mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px';
  },
 methods:{
      //添加订单列表的方法
      addOrderList(goods){
       
            // this.totalCount=0; //汇总数量清0
            // this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={
                  goodsId:goods.goodsId,
                  goodsName:goods.goodsName,
                  price:goods.price,
                  count:1
                  };
                 this.tableData.push(newGoods);

            }

            //进行数量和价格的汇总计算
            // this.tableData.forEach((element) => {
            //     this.totalCount+=element.count;
            //     this.totalMoney=this.totalMoney+(element.price*element.count);   
            // });

      }
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
       cursor: pointer;

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
