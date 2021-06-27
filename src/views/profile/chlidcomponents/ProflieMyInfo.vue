<template>
  <div id="my-info">
      <proflie-my-info-item>
          <span slot="price-n">0.00</span>
          <span slot="price-c">元</span>
          <div slot="my-info">我的余额</div>
      </proflie-my-info-item>
      <proflie-my-info-item>
          <span slot="price-n">0</span>
          <span slot="price-c">个</span>
          <div slot="my-info">我的优惠</div>
      </proflie-my-info-item>
      <proflie-my-info-item>
          <span slot="price-n">0</span>
          <span slot="price-c">分</span>
          <div slot="my-info">我的积分</div>
      </proflie-my-info-item>
  </div>
</template>

<script>
import ProflieMyInfoItem from './ProflieMyInfoItem.vue'
export default {
  components: { ProflieMyInfoItem },
  name: 'ProflieMyInfo',
}
</script>

<style scoped>
#my-info{
    display: flex;
    border-bottom: 10px solid #eee;
}
</style>