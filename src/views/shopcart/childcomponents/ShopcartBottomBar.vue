<template>
  <div class="bottom-bar">
      <!-- 购物车的底部结算栏的全选按钮 -->
      <div class="check-content">
          <check-button class="check-button" :is-checked='isSelectAll' @click.native="checkedClick"></check-button>
          <span>全选</span>
      </div>
      <!-- 购物车的底部结算栏的合计 -->
      <div class="price">合计：<span>{{totalPrice}}</span></div>
      <!-- 购物车的底部结算栏的去结束按钮 -->
      <div class="settlement" @click="checkOut">结算 ({{settlementLength}})</div>
  </div>
</template>

<script>
// 购物车的底部结算栏
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ShopcartBottomBar',
  components: {
      CheckButton
  },
  computed: {
      ...mapGetters(['cartList']),
      totalPrice(){  //合计的价格(重点)
        return '￥'+this.cartList.filter(item=>{  
            return item.checked
        }).reduce((preValue,item)=>{
            return preValue+item.price*item.count
        },0).toFixed(2)
      },
      settlementLength(){  //结算时的商品个数
        return this.cartList.filter(item=>{
            return item.checked
        }).length
      },
      isSelectAll(){  //当购物车全部商品都选中时，全选按钮选中，否则不选中
        if(this.cartList.length===0) return false  //当购物车没有商品时 ，全选按钮不选中
        // 方法1 遍历
        // return !(this.cartList.filter(item=>!item.checked).length)
        //方法2,不同于filter,当查找到有商品未选中时,就停止遍历直接返回flase,性能优于方法1
        return !this.cartList.find(item=>!item.checked)
      }
  },
  methods:{
      checkedClick(){  //全选按钮
        if(this.isSelectAll){  //商品全部选中时
            this.cartList.forEach(item=>item.checked=false)
        }else{  //商品部分选中或者没有选中时
            this.cartList.forEach(item=>item.checked=true)
        }
      },
      checkOut(){  //结算按钮
        if(!this.cartList.find(item=>item.checked)){  //当点击结算按钮但没有选择商品时
            this.$toast.show('你还没有选择宝贝哦!',1500)
        }else{ //结算按钮结算成功的后续程序
            this.$toast.show('结算成功~',1500)
        }
      }
  }
}
    
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
}
.check-content{
    display: flex;
    margin-left: 5px;
    align-items: center;
}
.check-button{
    width: 20px;
    height: 20px;
    border: none;
    margin-right: 5px;
}
.check-content span{
    font-size: 14px;
}
.price{
    margin-left: 80px;
}
.price span{
    color: rgb(255, 73, 1);
}
.settlement{
    font-size: 14px;
    width: 100px;
    text-align: center;
    color: #fff;
    background-color: rgb(255, 73, 1);;
}
</style>