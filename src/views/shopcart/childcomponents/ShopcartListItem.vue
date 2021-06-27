<template>
  <div id="list-item">
      <!-- 购物车商品的选择按钮 -->
      <div class="item-selector">
          <check-button :is-checked="product.checked" @click.native="checkedClick"></check-button>
      </div>
      <!-- 购物车商品的图片区域 -->
      <div class="item-img">
          <img :src="product.img" alt="商品图片">
      </div>
      <!-- 购物车商品的具体信息区域 -->
      <div class="item-info">
          <!-- 购物车商品的标题 -->
          <div class="item-title">{{product.title}}</div>
          <!-- 购物车商品的描述 -->
          <div class="item-desc">{{product.desc}}</div>
          <!-- 购物车商品的价格 -->
          <div class="info-bottom">
              <!-- 购物车商品的价格 -->
              <div class="item-price">￥{{product.price}}</div>
              <!-- 购物车商品的数量 -->
              <div class="item-num">
                  <button @click="reduce" :disabled="dis" :class="{reduceColor:isreduceColor}">-</button>  
                  <div class="item-count">{{product.count}}</div>
                  <button @click="increase">+</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
//购物车的商品列表item
import CheckButton from 'components/content/checkbutton/CheckButton.vue';
export default {
  components: { CheckButton },
  name: 'ShopcartListItem',
  props:{
      product:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  data () {
      return {
          dis:false  //控制商品数量减少按钮是否禁用
      }
  },
  methods:{
      reduce(){  //商品数量减少按钮
        // this.product.count==1?1:this.product.count--
        if(this.product.count===1){ //商品数量为1时禁用商品数量减少按钮,并且提醒用户
            this.$toast.show('该宝贝不能减少了哟~')
            return !this.dis
        }
        this.$store.commit('reducenum',this.product)
        
      },
      increase(){  //商品数量增加按钮
         // this.product.count+=1
         //console.log(this.product);
         this.$store.commit('addnum',this.product)
      },
      checkedClick(){  //购物车商品选中与不选中的切换
          this.product.checked=!this.product.checked
      }
  },
  computed: {
      isreduceColor(){  //当购物车商品数量为1时
        return this.product.count===1
      }
  }
}
</script>

<style scoped>
#list-item{
    width: 100%;
    display: flex;
    padding: 5px;
}
.item-img img{
    width: 80px;
    height: 120px;
    border-radius: 5px;
}
.item-selector{
    width: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;
}
.item-info{
    font-size: 16px;
    color: #333;
    padding:5px 10px;
    overflow: hidden;
}
.item-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.item-desc{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    margin-top: 30px;
    color: #666;
}
.info-bottom{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.item-price{
    font-size: 16px;
    color: rgb(255, 73, 1);;
}
.item-num{
    display: flex;
    border: 1px solid #333;
    border-radius: 2px;
}
.item-num button{
    width: 20px;
    border: none;
    outline: none;
    background-color: #fff;
    clear: both;
}
.item-count{
    text-align: center;
    width: 40px;
    border-left: 1px solid #333;
    border-right: 1px solid #333;
}
.reduceColor{
    color: #aaa;
}
</style>