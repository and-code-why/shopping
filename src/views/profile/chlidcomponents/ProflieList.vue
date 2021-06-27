<template>
  <div>
      <proflie-list-item>
          <div slot="img"><img src="~assets/img/profile/message.svg" alt=""></div>
          <div slot="title">我的消息</div>
      </proflie-list-item>
      <proflie-list-item>
          <div slot="img"><img src="~assets/img/profile/pointer.svg" alt=""></div>
          <div slot="title">我的积分</div>
      </proflie-list-item>
      <proflie-list-item class="vip">
          <div slot="img"><img src="~assets/img/profile/vip.svg" alt=""></div>
          <div slot="title">会员卡</div>
      </proflie-list-item>
      <proflie-list-item @click.native="goCart">
          <div slot="img"><img src="~assets/img/profile/cart.svg" alt=""></div>
          <div slot="title">我的购物车</div>
      </proflie-list-item>
      <proflie-list-item>
          <div slot="img"><img src="~assets/img/profile/shopping.svg" alt=""></div>
          <div slot="title">下载购物APP</div>
      </proflie-list-item>
  </div>
</template>

<script>
// 我的列表
import ProflieListItem from './ProflieListItem.vue'
export default {
  name: 'ProflieList',
  components: {
      ProflieListItem
  },
  methods:{
     goCart(){  //点击我的购物车跳转到购物车页面
          this.$router.push('/shopcart')
      }
  }
}
</script>

<style scoped>
.vip{
    border-bottom: 10px solid #eee;
}
</style>