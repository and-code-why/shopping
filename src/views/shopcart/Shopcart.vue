<template>
  <div id="shop-cart">
    <!-- 购物车的顶部导航栏模块区域 -->
    <shopcart-nav-bar></shopcart-nav-bar>
    <!-- 购物车的商品列表模板区域 -->
    <shopcart-list></shopcart-list>
    <!-- 购物车底部的结算栏 -->
    <shopcart-bottom-bar></shopcart-bottom-bar>
  </div>
</template>

<script>
//购物车页面

//导入子组件
import ShopcartNavBar from './childcomponents/ShopcartNavBar.vue'
import ShopcartList from './childcomponents/ShopcartList.vue'
import ShopcartBottomBar from './childcomponents/ShopcartBottomBar.vue'

export default {
  name: 'Shopcart',
  components: { 
    ShopcartNavBar,
    ShopcartList,
    ShopcartBottomBar,
  },
}
</script>

<style scoped>

</style>