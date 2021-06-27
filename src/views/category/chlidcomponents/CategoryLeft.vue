<template>
  <div class="category-left" v-if="Object.keys(list).length !==0">
      <div v-for="(item,index) in list" :key="index" class="cartegory-left-item" @click="itemClick(index)">
          <p :class="{active:index===currIndex}">{{item.title}}</p>
      </div>
  </div>
</template>

<script>
// 商品分类的侧边栏
export default {
  name: 'CategoryLeft',
  data() {
      return {
          currIndex:0, //控制item的选中与不选中
      };
  },
  props:{
      list:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      itemClick(index){  //侧边栏item的点击事件
        // console.log(index);
        this.currIndex=index
        this.$emit('itemClick', index);
      }
  }
}
</script>

<style scoped>
.category-left{
    padding: 44px 0px 49px;
    /* flex: 1; */
    width: 100px;
    background-color: #f6f6f6;
}
.cartegory-left-item {
    height: 40px;
    line-height: 40px;
}
.cartegory-left-item p{
    text-align: center;
    font-size: 14px;
}
.active{
    color: var(--color-tint);
    background-color: #fff;
    font-weight: 600;
    border-left: 2px solid var(--color-tint);
}
</style>