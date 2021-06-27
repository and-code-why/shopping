<template>
  <div class="nav-bar">
      <nav-bar class="shopcart-nav-bar"><div slot="center">购物车({{length}})</div></nav-bar>
  </div>
</template>

<script>
//购物车的导航栏
import NavBar from 'components/common/navbar/NavBar.vue'

//导入方法
import { mapGetters } from 'vuex'
export default {
  name: 'ShopcartNavBar',
  components: { 
    NavBar,
  },
  computed:{
      //方式一
      /*cartListLength(){  //购物车商品的种类个数  
          return this.$store.getters.cartListLength
      }*/
      //方式二 mapGetters
      //...mapGetters(['cartListLength'])
      //同样可以给传递过来的Getters取别名,具体看Vux官网
      ...mapGetters({
          length:'cartListLength'
      })
  }
}
</script>

<style scoped>
.shopcart-nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>