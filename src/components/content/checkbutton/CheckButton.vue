<template>
  <div>
      <img src="~assets/img/cart/tick.svg" alt="" class="check-button" :class="{checked:isChecked}">
  </div>
</template>

<script>
// 购物车商品的选中按钮
export default {
  name: 'CheckButton',
  props:{
    isChecked:{  //控制购物车商品否则选中
      type:Boolean,  
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
    display: block;
    border-radius: 50%;
    border: 1.5px solid #aaa;
}
.checked{
  background-color: rgb(255, 73, 1);
  border-color: rgb(255, 73, 1);
}
</style>