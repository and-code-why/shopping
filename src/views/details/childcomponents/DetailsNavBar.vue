<template>
  <div class="detalis-nav">
      <nav-bar>
          <div slot="left" @click="backClick">
              <img src="../../../assets/img/common/back.svg" alt="返回">
          </div>
          <div slot="center" class="detalis-center">
              <div v-for="(item,index) in titles" :key="index" class="detalis-center-item">
                  {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
//封装商品详情页的nav-bar
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'DetailsNavBar', 
  components: {
      NavBar
  },
  data () {
      return {
          titles:['商品','参数','评论','推荐'],
      }
  },
  methods:{
      backClick(){ //返回首页按钮
        this.$router.back()
      }
  }
}
</script>

<style scoped>
.detalis-nav{
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
.detalis-nav img{
    width: 22px;
    vertical-align: middle;
}
.detalis-center{
    display: flex;
}
.detalis-center-item{
    flex: 1;
}
.detalis-nav{
   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}
</style>