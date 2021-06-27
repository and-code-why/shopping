<template>
  <div id="bottom-bar">
      <div>
          <i class="icon service"></i>
          <span>客服</span>
      </div>
      <div>
          <i class="icon shop"></i>
          <span>店铺</span>
      </div>
      <div>
          <i class="icon dynamic" v-if="isShow" @click="isShow=!isShow"></i>
          <i class="icon active-dynamic" v-else @click="isShow=!isShow"></i>
          <span>动态</span>
      </div>
      <div class="go-shopping-Cart" @click="addCart">
          <span>加入购物车</span>
      </div>
      <div class="buy">
          <span>购买</span>
      </div>
  </div>
</template>

<script>
// 商品详情页的底部工具栏
export default {
  name: 'DetalisBottomBar',
  data () {
      return {
          isShow:true //控制动态图片的切换
      }
  },
  methods:{
      addCart(){
          //console.log('点击了添加到购物车按钮');
          this.$emit('addCart');
      }
  }
}
</script>

<style scoped>
#bottom-bar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 9999;
    display:flex;
    flex: 1;
}
#bottom-bar>div{
    flex: 1;
    text-align: center;
}
#bottom-bar span{
    font-size: 14px;
}
.icon{
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
    margin-top: 5px;
}
.active-dynamic{
    background-position: 0 -193px;
}
.service{
    background-position: 0 -58.5px;
}
.shop{
    background-position: 0 -108px;
}
.dynamic{
    background-position: 0 -164px;
}
.go-shopping-Cart{
    background-color: yellow;
    line-height: 49px;
}
.buy{
    background-color: var(--color-tint);
    line-height: 49px;
}
.buy span{
    color: #fff;
}
</style>