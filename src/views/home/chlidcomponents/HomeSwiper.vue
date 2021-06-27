<template>
  <div>
      <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  components:{
      Swiper,
      SwiperItem
  },
  data () {
      return {
          flag:0
      }
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      imgLoad(){
          if(this.flag==0){
              //   console.log('轮播图图片加载完成');
              this.$emit('swiperimgLoad')
              this.flag=1
          }
          
      }
  }
}
</script>

<style scoped>

</style>