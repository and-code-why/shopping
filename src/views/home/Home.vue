<template>
  <div id="home">
    <!-- nav区域 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 复制一个tab-control实现吸顶灯效果 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="isTabFixnd" class="fixnd"></tab-control>
    <!-- scroll区域 -->
    <scroll class="scroll-h" ref="scroll" :probeType='3' @scroll="contentScroll" :pull-up-load='true' @pullingUp='loadMore'>
      <!-- 轮播图区域 -->
      <home-swiper :banners="banners" @swiperimgLoad='swiperimgLoad'></home-swiper>
      <!-- 商品推荐模块区域 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行(特色)模块区域 -->
      <feature-view></feature-view>
      <!-- 商品切换栏模块区域 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"></tab-control>
      <!-- 商品展示模板区域 -->
      <goods-list :goods="goods[currendType].list"></goods-list>
    </scroll>
    <!-- 返回顶部按钮 -->
    <back-top @click.native="backClick" v-show="isShowbacktop"></back-top>  <!--native作用就是把一个vue组件转化为一个普通的HTML标签，并且该修饰符对普通HTML标签是没有任何作用的。-->
  </div>
</template>

<script>
// 导入组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'
//导入子组件
import HomeSwiper from './chlidcomponents/HomeSwiper.vue'
import RecommendView from './chlidcomponents/RecommendView'
import FeatureView from './chlidcomponents/FeatureView.vue'
//导入网络请求的方法
import {getHomeMultidata,getHomeGoods} from 'network/home'

//导入防抖函数
import {debounce} from 'common/utils'


export default { 
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  data () {
    return {
      banners:[], //保存轮播图的数据
      recommends:[],  //保存商品推荐的数据
      goods:{  //保持商品展示的数据
        'pop':{page:0,list:[]},  //流行的数据
        'new':{page:0,list:[]},  //新款的数据
        'sell':{page:0,list:[]}, //精选的数据
      },
      currendType:'pop', //控制请求商品展示数据的类型
      isShowbacktop:false,  //控制返回顶部按钮的显示与隐藏
      topOffsetTop:0, //距离页面顶部的距离
      isTabFixnd:false,  //是否有吸顶灯效果
      saveY:0,  //记录当前离开首页的位置的Y值
    }
  },
  //解决从商品详情页跳转到首页不能正常滚动到正确的位置的问题
  activated(){  
    // console.log('进入首页');
    this.$refs.scroll.refresh()  //刷新一遍
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    // console.log('离开首页');
    this.saveY=this.$refs.scroll.getScrollY()
    // console.log(this.saveY);
  },
  created(){
    this.getHomeMultidata() //轮播图、商品推荐
    //商品展示的数据
    this.getHomeGoods('pop') //流行的数据的请求
    this.getHomeGoods('new') //新款的数据的请求
    this.getHomeGoods('sell')//精选的数据的请求
  },
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,50)  //重新计算滑动高度
    this.$bus.$on('itemImageLoad',()=>{
      // console.log('图片加载完成');  //请求过于频繁,涉及防抖函数,减少请求的次数
      refresh()
    })
  },
  methods:{
    //网络请求的方法
    getHomeMultidata(){  // //轮播图、商品推荐数据
      getHomeMultidata().then(res=>{
        //console.log(res.data);  //请求成功返回的数据
        this.banners=res.data.data.banner.list; //将请求过来的轮播图数据保存到banners中
        this.recommends=res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){  //请求商品展示的数据
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res.data);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.finishPullUp()
      })
    },
    // 监听事件的方法
    tabClick(index){  //点击商品切换栏实现商品数据的切换
      // console.log(index);
      switch(index){
        case 0:
          this.currendType='pop'
          break;
        case 1:
          this.currendType='new'
          break;
        case 2:
          this.currendType='sell'
      }
      this.$refs.tabControl1.currendIndex=index;
      this.$refs.tabControl2.currendIndex=index;
      //实现商品种类的切换后能自动的到各个商品类的开头位置
      this.topOffsetTop=this.$refs.tabControl1.$el.offsetTop;
      this.$refs.scroll.scrollTo(0,-this.topOffsetTop,0)
    },
    backClick(){  //返回顶部按钮
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){  //监听滑动位置
      // console.log(position); 实现了对滑动位置的监听
      // if(-(position.y)>1000){
      //   this.isShowbacktop=true
      // }else{
      //   this.isShowbacktop=false
      // }
      this.isShowbacktop=-(position.y)>1000?true:false
      this.isTabFixnd=-(position.y)>this.topOffsetTop?true:false
    },
    loadMore(){  //上拉加载更多
      this.getHomeGoods(this.currendType)
    },
    swiperimgLoad(){  //获取tabControl的高度
      this.topOffsetTop=this.$refs.tabControl1.$el.offsetTop;
      // console.log(this.topOffsetTop);
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.scroll-h{ 
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  /* height: calc(100% - 93px); */
}
.home-nav{
  color: #ffffff;
  background-color: var(--color-tint);
  position: fixed;
  left:0;
  right: 0;
  top: 0;
  z-index: 9;
}
.fixnd{
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
}
</style>