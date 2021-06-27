<template>
  <div class="my-info-item">
      <!-- 数量部分 -->
      <div class="price">
        <!-- 数量 -->
        <span class="price-n"><slot name="price-n"></slot></span>
        <!-- 单位 -->
        <span class="price-c"><slot name="price-c"></slot></span>
      </div>
      <!-- 我的信息部分 -->
      <div class="my-info"><span><slot name="my-info"></slot></span></div>
  </div>
</template>

<script>
export default {
  name: 'ProflieMyInfoItem',
}
</script>

<style scoped>
.my-info-item{
  text-align: center;
  flex: 1;
  padding: 20px 0;
  border-right: 1px #eee solid;
}
.my-info-item:last-child{
  border-right: none;
}
.price-n{
  font-size: 18px;
  font-weight: 550;
  color: rgb(255, 73, 1);
}
.price-c{
  font-size: 14px;
}
.my-info {
  margin-top: 2px;
}
.my-info span{
  font-size: 14px;
}
</style>