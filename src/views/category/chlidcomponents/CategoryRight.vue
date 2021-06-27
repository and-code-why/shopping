<template>
  <div class="category-right" v-if="Object.keys(info).length!==0">
      <div v-for="(item,index) in info" :key="index" class="category-right-item">
          <a :href="item.link">
              <div class="item-img"><img v-lazy="item.image" alt="" :key="item.image"></div>
              <div class="item-title">{{item.title}}</div>
          </a>
      </div>
      <!-- <div class="tab-control">
          <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      </div> -->
  </div>
</template>

<script>
// 分类视图商品分类的item
import TabControl from 'components/content/tabcontrol/TabControl'
export default {
  name: 'CategoryRight',
  components: {
      TabControl 
  },
  props:{
      info:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  methods:{
      tabClick(index){
          console.log(index);
          
      }
  }
}
</script>

<style scoped>
.category-right{
    height: 50%;
    flex: 3;
    margin-top: 50px;
    margin-bottom: 49px;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
}
.category-right-item{
    width: 33%;
    text-align: center;
    height: 100px;
    display: flex;
    justify-content: space-around;
}
.item-img img{
    width: 60%;
}
.item-title{
    font-size: 14px;
}
.tab-control{
    width: 100%;
}
</style>