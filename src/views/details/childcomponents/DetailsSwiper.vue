<template>
    <swiper class="detalis-swiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
//封装商品详情页的轮播图
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'DetailsSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
  }

}
</script>

<style scoped>
.detalis-swiper{
    height: 280px;
    overflow: hidden;
}
</style>