<template>
  <div>
      <!-- 顶部导航栏部分 -->
      <proflie-nav-bar></proflie-nav-bar>
      <!-- 用户登录信息部分 -->
      <proflie-login></proflie-login>
      <!-- 用户的积分信息等等信息部分 -->
      <proflie-my-info></proflie-my-info>
      <!-- 我的列表信息部分 -->
      <proflie-list></proflie-list>
  </div>
</template>

<script>
// 我的 视图
import ProflieNavBar from './chlidcomponents/ProflieNavBar.vue'
import ProflieLogin from './chlidcomponents/ProflieLogin.vue'
import ProflieMyInfo from './chlidcomponents/ProflieMyInfo.vue'
import ProflieList from './chlidcomponents/ProflieList.vue'

export default {
  name: 'Profile',
  components: {
    ProflieNavBar,
    ProflieLogin,
    ProflieMyInfo,
    ProflieList,
  },
}
</script>

<style scoped>

</style>