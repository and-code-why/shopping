<template>
  <div class="details">
    <!-- 导航栏模板区域 -->
    <details-nav-bar class="nav"></details-nav-bar>
      <!-- 轮播图模板区域 -->
      <details-swiper :top-images="topImages"></details-swiper>
      <!-- 商品的基本信息模板区域 -->
      <details-base-info :goods="goods"></details-base-info>
      <!-- 商品店铺的基本信息模板区域 -->
      <details-shop-info :shop="shop"></details-shop-info>
      <!-- 商品的穿着效果模板区域 -->
      <details-goods-info :detailInfo="detailInfo"></details-goods-info>
      <!-- 商品的参数模板区域 -->
      <details-param-info :paramInfo="paramInfo"></details-param-info>
      <!-- 商品的评论模板区域 -->
      <detalis-comment-info :comment="comment"></detalis-comment-info>
      <!-- 推荐商品的模板区域 -->
      <goods-list :goods="recommend" class="goods-item"></goods-list>
      <!-- 商品的底部工具栏 -->
      <detalis-bottom-bar @addCart="addCart"></detalis-bottom-bar>
  </div>
</template>

<script>
//商品详情页
// 导入组件
import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
//导入子组件
import DetailsNavBar from './childcomponents/DetailsNavBar.vue'
import DetailsSwiper from './childcomponents/DetailsSwiper.vue'
import DetailsBaseInfo from './childcomponents/DetailsBaseInfo.vue'
import DetailsShopInfo from './childcomponents/DetailsShopInfo.vue'
import DetailsGoodsInfo from './childcomponents/DetailsGoodsInfo.vue'
import DetailsParamInfo from './childcomponents/DetailsParamInfo.vue'
import DetalisCommentInfo from './childcomponents/DetalisCommentInfo.vue'
import DetalisBottomBar from './childcomponents/DetalisBottomBar.vue'
// 导入网络请求的方法
import {getDetails,Goods,Shop,Params,getRecommend} from 'network/details' 

export default {
  name: 'Details',
  components:{
    DetailsNavBar,
    DetailsSwiper,
    DetailsBaseInfo,
    DetailsShopInfo,
    Scroll,
    DetailsGoodsInfo,
    DetailsParamInfo,
    DetalisCommentInfo,
    GoodsList,
    DetalisBottomBar,
  },
  data() {
      return {
          iid:null,
          topImages:[], //保存轮播图的数据
          goods:{},  //保存商品基本信息的数据
          shop:{},  //保存商品店铺的数据
          detailInfo:{},  //保存商品穿着效果的数据
          paramInfo:{},  //保存商品参数的数据
          comment:{}, //保存商品评论的数据
          recommend:[], //保存推荐商品的数据
      }
  },
  created(){
      this.iid=this.$route.params.iid;
      this.getDetails()  //商品详情页的数据
      this.getRecommend()  //商品详情页的推荐商品的数据
  },
  methods:{
      //网络请求的方法
      getDetails(){  //请求商品详细页的数据
          getDetails(this.iid).then(res=>{
              const data=res.data.result;
              //console.log(res.data);  //商品详细页总的数据
              this.topImages=data.itemInfo.topImages //轮播图的数据

              //商品的详细信息
              this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
              //console.dir(this.goods)

              //商品店铺的详细信息
              this.shop=new Shop(data.shopInfo)
              //console.dir(this.shop)

              //商品穿着效果信息
              this.detailInfo=data.detailInfo
              //console.dir(this.detailInfo)

              // 商品参数的信息
              this.paramInfo=new Params(data.itemParams.info,data.itemParams.rule);
              // console.dir(this.paramInfo);
              // 商品的评论信息
              if(data.rate.list){  //判断当存在评论信息时在给comment赋值
                this.comment=data.rate.list[0];
              }
              // console.dir(this.comment);
          })
      },
      getRecommend(){  //请求商品详情页的推荐商品的数据
        getRecommend().then(res=>{
          // console.log(res);
          this.recommend=res.data.data.list
        })
      },
      //监听事件的方法
      addCart(){  //添加购物车按钮
        //获取购物车需要展示商品的数据
        const product={}  //用于保存购物车需要展示商品的数据
          product.img=this.topImages[0]; //购物车商品的图片
          product.title=this.goods.title;  //购物车商品的标题
          product.desc=this.goods.desc;  //购物车商品的描述
          product.price=this.goods.lowNowPrice //购物车商品的价格
          product.iid=this.iid  //购物车商品的iid,用于区分商品
          // console.log(product);  
          //将购物车需要展示商品的数据提交vuex
          this.$store.dispatch('addCart',product).then(res=>{
            //方法1：
            /*this.msg=res;
            this.show=true;
            setTimeout(() => {
              this.msg='';
              this.show=false;
            }, 1500);*/
            // 方法2,复用性更高
            // console.log(this.$toast);
            this.$toast.show('添加成功，在购物车等亲~',2000)
          })
      }
  }
}
</script>

<style scoped>
/* .detalis{
  height: calc(100% - 44px);
}
.scorll-h{
  height: 100%;
  overflow: hidden;
} */
.goods-item{
  margin-bottom: 45px;
}
</style>