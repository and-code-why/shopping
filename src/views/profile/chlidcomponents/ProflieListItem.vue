<template>
  <div class="list-item">
      <div class="item-img"><slot name="img"></slot></div>
      <div class="item-title"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'ProflieListItem',
}
</script>

<style scoped>
.list-item {
    display: flex;
    padding: 8px 0px;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.list-item:last-child{
    border-bottom: none;
}
.item-img {
    margin-left: 10px;
}
.item-img img{
    width: 20px;
    vertical-align: top;
}
.item-title{
    margin-left: 5px;
    font-size: 14px;
    color: #000;
}
</style>