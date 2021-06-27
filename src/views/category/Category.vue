<template>
  <div id="category">
    <!-- 顶部导航栏部分 -->
    <category-nav-bar></category-nav-bar> 
    <!-- 左侧侧边栏部分 -->
    <category-left :list="list" @itemClick="itemClick"></category-left>
    <!-- 右侧商品分类信息部分 -->
    <category-right :info="info"></category-right>
  </div>
</template>

<script>
//分类 视图
// 导入组件
import Scroll from 'components/common/scroll/Scroll.vue';

//导入子组件
import CategoryNavBar from './chlidcomponents/CategoryNavBar.vue';
import CategoryLeft from './chlidcomponents/CategoryLeft.vue';
import CategoryRight from './chlidcomponents/CategoryRight.vue';
//导入网络请求的方法
import {getCategory,getCategoryInfo} from 'network/category'

export default {
  name: 'Category',
  components: {
    Scroll,
    CategoryNavBar,
    CategoryLeft,
    CategoryRight,
  },
  data () {
    return {
      list:[], //保存分类视图侧边栏的数据
      info:[],//保存分类商品的信息数据
    }
  },
  created(){
    this.getCategory() //分类视图侧边栏的数据
  },
  methods:{
    //网络请求的方法
    getCategory(){  //分类视图侧边栏的数据
       getCategory().then(res=>{
        //console.log(res); //分类的数据
        const data=res.data.data
        //分类视图侧边栏的数据
        this.list=data.category.list
        // console.dir(this.list)
        this.getCategoryInfo(0)  //默认请求第一个商品分类列表的数据
      })
    },
    getCategoryInfo(index) { //分类商品的具体商品数据
      const mailKey = this.list[index].maitKey;
      getCategoryInfo(mailKey).then(res=>{
        console.log(res);
        const data=res.data.data;
        //分类商品的具体商品数据item
        this.info=data.list 
        // console.log(this.info);
      })
    },
    itemClick(index){
      // console.log(index);
      this.getCategoryInfo(index);
    }
  }
}
</script>

<style scoped>
/* #category{
  height: 100vh;
}
.scroll-h{
  height: calc(100% - 44px);
} */
#category{
  display: flex;
}
</style>