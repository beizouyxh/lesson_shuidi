<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        订单栏
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
</style>
