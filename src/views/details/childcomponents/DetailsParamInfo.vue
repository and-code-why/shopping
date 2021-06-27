<template>
  <div id="param-info" v-if="Object.keys(paramInfo).length!==0">
      <!-- 商品的尺码表格 -->
     <table v-for="(table,index1) in paramInfo.tables" :key="index1">
         <tr v-for="(tr,index2) in table" :key="index2">
             <td v-for="(td,index3) in tr" :key="index3">{{td}}</td>
         </tr>
     </table>
     <!-- 商品的参数表格 -->
     <table>
         <tr v-for="(item,index) in paramInfo.set" :key="index">
             <td class="set-key">{{item.key}}</td>
             <td class="set-value">{{item.value}}</td>
         </tr>
     </table>
     <!-- 商品的参数图片 -->
     <div class="paraminfo-img" v-if="paramInfo.images.length!==0">
         <img :src="paramInfo.images" alt="">
     </div>
  </div>
</template>

<script>
//商品详情页的参数
export default {
  name: 'DetailsParamInfo',
  props:{
     paramInfo:{
         type:Object,
         default(){
             return {}
         }
     } 
  }
}
</script>

<style scoped>
#param-info{
    padding: 20px 8px 10px;
    border-bottom: 5px solid #f2f5f8;
}
#param-info table{
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}
#param-info table tr{
    height: 44px;
}
#param-info table td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.set-key{
    width: 95px;
}
.set-value{
    color: var(--color-high-text);
}
.paraminfo-img img{
    width: 100%;
    vertical-align: middle;
}
</style>