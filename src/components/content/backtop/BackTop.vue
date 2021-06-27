<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
// 封装返回顶部组件
export default {
  name: 'BackTop',
}
</script>

<style scoped>
.back-top{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 10px;
    bottom:48px;
    z-index: 10;
}
.back-top img{
    width: 45px;
    height: 45px;
}
</style>