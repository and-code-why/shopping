<template>
  <div class="shop-info" v-if="Object.keys(shop).length!==0">
      <!-- 店铺的logo部分 -->
      <div class="shop-logo">
          <img :src="shop.shopLogo" alt="">
          <span class="shop-logo-title">{{shop.name}}</span>
      </div>
      <!-- 店铺的详细信息部分 -->
      <div class="shop-middle">
          <!-- 店铺的全部销量、全部宝贝部分 -->
          <div class="shop-middle-left">
              <!-- 店铺的全部销量 -->
              <div class="shop-cSells">
                  <span>{{shop.cSells|sellCountFilter}}</span>
                  <div>总销量</div>
              </div>
              <!-- 店铺的全部宝贝 -->
              <div class="shop-cGoods">
                  <span>{{shop.cGoods}}</span>
                  <div>全部宝贝</div>
              </div>
          </div>
          <!-- 店铺的评分 -->
          <div class="shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td class="item-name">{{item.name}}</td>
                      <td class="item-score" :class="{'item-score-color':item.isBetter}">{{item.score}}</td>
                      <td class="item-isBetter" :class="{'item-isBetter-color':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
//商品详情页的店铺信息
export default {
  name: 'DetailsShopInfo',
  props:{
      shop:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  filters:{
      sellCountFilter: function (value) {  //转换为万
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
  }
}
</script>

<style scoped>
.shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
}
.shop-logo img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
}
.shop-logo-title{
    position: relative;
    top: -15px;
    margin-left: 10px;
    font-size: 16px;
}
.shop-middle{
    margin-top: 15px;
    display: flex;
}
.shop-middle-left{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 15px;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
}
.shop-cSells span,.shop-cGoods span{
    color: #222;
    font-size: 18px;
    text-align: center;
}
.shop-cSells div,.shop-cGoods div{
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
}
.shop-middle-right{
    width: 50%;
    justify-content: space-evenly;
    margin-left: 30px;
    font-size: 13px;
    color: #222;
}
.shop-middle-right td{
    padding: 0px 0px 10px 10px;
}
.item-score{
    color: #5ea732;
}
.item-score-color{
     color: #f13e3a;
}
.item-isBetter span{
    color: #fff;
    padding: 1px;
    background-color: #5ea732;
}
.item-isBetter-color span{
     background-color: #f13e3a;
}
.shop-bottom{
    text-align: center;
    margin-top: 15px;
}
.enter-shop{
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #f2f5f8;
    display: inline-block;
}
</style>