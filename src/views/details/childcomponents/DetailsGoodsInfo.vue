<template>
  <div id="goods-info" v-if="Object.keys(detailInfo).length!==0">
      <!-- 商品穿着效果的标题 -->
      <div class="info-desc">
           <!-- 开始的标签 -->
            <div class="start"></div>
            <!-- 商品的描述 -->
            <div class="goods-title">
                {{detailInfo.desc}}
            </div>
            <!-- 结束的标签 -->
            <div class="end"></div>
      </div>
      <!-- 商品商品穿着效果的图片的标题 -->
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>  
      <!-- 商品商品穿着效果的图片 -->
      <div class="info-img" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
          <img v-lazy="item" alt="" :key="item">
      </div>
  </div>
</template>

<script>
// 商品详情页的商品穿着效果
export default {
  name: 'DetailsGoodsInfo',
  props:{
      detailInfo:{
          type:Object,
          default(){
              return {};
          }
      }
  }
}
</script>

<style scoped>
#goods-info{
    padding: 20px 0px;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc{
    padding: 0 15px;
}
.goods-title{
    font-size: 14px;
    clear: both;
}
.start,.end{
    width: 90px;
    height: 1.5px;
    background-color: #a3a3a5;
    margin: 15px 0;
    position: relative;
}
.start{
    float: left;
}
.end{
    float: right;
}
.start::before,.end::after{
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
}
.end::after{
    right: 0;
}
.info-key{
    padding: 0px 15px;
    margin: 20px 0px 10px;
    color: #333;
    font-size: 16px;
}
.info-img img{
    width: 100%;
}
</style>