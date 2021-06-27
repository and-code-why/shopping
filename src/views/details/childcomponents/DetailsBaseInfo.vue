<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">  <!--这里的if起判断的作用，当里面有数据时在进行渲染-->
      <!-- 商品基本信息的标题 -->
      <div class="info-title">{{goods.title}}</div>
      <!-- 商品基本信息的价格 -->
      <div class="info-price">
          <span class="n-price">{{goods.price}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discountDesc.length!==0">{{goods.discountDesc}}</span>
      </div>
      <!-- 商品基本信息的销量信息 -->
      <div class="info-columns">
         <span>{{goods.columns[0]}}</span>
         <span>{{goods.columns[1]}}</span>
         <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <!-- 商品基本信息的服务信息 -->
      <div class="info-services">
          <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
//商品详情页的商品的基本信息
export default {
  name: 'DetailsBaseInfo',
  props:{
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0px 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-price{
    margin-top: 10px;
}
.info-title{
    color: #222;
}
.n-price{
    color: var(--color-high-text);
    font-size: 22px;
}
.o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.discount{
    width: 30px;
    height: 20px;
    padding: 2px 5px;
    background-color: var(--color-high-text);
    border-radius: 8px;
    color: #fff;
    margin-left: 5px;
    font-size: 12px;
    position: relative;
    top: -2px;
}
.info-columns{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-services{
    display: flex;
    line-height: 60px;
    justify-content: space-between;
}
.info-services-item img{
    width: 14px;
    position: relative;
    top: 2px;
}
.info-services-item span{
    font-size: 14px;
    color: #333;
    margin-left: 3px;
}
</style>