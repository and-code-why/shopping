<template>
  <div>
      <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
  </div>
</template>

<script>
// 分类视图的顶部导航栏
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'CategoryNavBar',
  components: {
      NavBar
  },
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
</style>