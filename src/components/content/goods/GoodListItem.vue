<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImg" alt="" @load="imageLoad" :key="showImg">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props:{
      goodsItem:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods:{
      imageLoad(){
          //   console.log('图片加载完成');
          this.$bus.$emit('itemImageLoad')  //事件总线(非父子组件传递东西的方法),需要在全局注册 Vue.prototype.$bus = new Vue() //事件总线
      },
      itemClick(){  //跳转到详情页
        this.$router.push('/detalis/'+this.goodsItem.iid)
        // console.dir(this.goodsItem);
      }
  },
  computed:{
      showImg(){
          return this.goodsItem.image||this.goodsItem.show.img
      }
  }
}
</script>

<style scoped>
.goods-item{
    position: relative;
    width: 48%;
    padding-bottom: 40px;
}
.goods-item img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 3px;
}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>