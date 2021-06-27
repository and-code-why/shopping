<template>
  <div>
      <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
  </div>
</template>

<script>
// 我的页面的顶部导航栏
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'ProflieNavBar',
   components: {
       NavBar,
   },
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
}
</style>