<template>
  <div class="list">
     <shopcart-list-item v-for="(item,index) in list" :key="index" :product="item" ></shopcart-list-item>
  </div>
</template>

<script>
//购物车的商品列表
import { mapGetters } from 'vuex'
import ShopcartListItem from './ShopcartListItem.vue'
export default {
  components: { ShopcartListItem },
  name: 'ShopcartList',
  computed:{
      ...mapGetters({
          list:'cartList'
      })
  }
}
</script>

<style scoped>
.list{
    padding-bottom: 89px;
    padding-top: 44px;
}
</style>