<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  padding: 10px 0px 20px;
  border-bottom: 5px solid #eee;
  font-size: 13px;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 90%;
  margin-bottom: 10px;
}
</style>