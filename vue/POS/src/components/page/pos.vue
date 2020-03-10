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

           <el-tab-pane label="挂单">

           </el-tab-pane>
           <el-tab-pane label="外卖">

           </el-tab-pane>

        </el-tabs>
      </el-col>

       <el-col>
        产品栏
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

      ]
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
</style>
