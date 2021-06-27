<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
       :class="{active:index===currendIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
// 商品切换栏模块
export default {
  name: 'TabControl',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
      return{
          currendIndex:0
      }
  },
  methods:{
      itemClick(index){
          this.currendIndex=index
          this.$emit('tabClick',index)
      }
  }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    background-color: #ffffff;
    z-index: 9;
    margin-bottom: 8px;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
     border-bottom: 3px solid var(--color-tint);
}
</style>