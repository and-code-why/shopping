<template>
  <div id="comment-info" v-if="Object.keys(comment).length !==0">
      <!-- 评论的标题 -->
      <div class="comment-title">
          <span>用户评论</span>
          <span>更多</span>
      </div>
      <!-- 评论的用户头像名称 -->
      <div class="comment-logo">
          <img :src="comment.user.avatar" alt="用户头像">
          <span>{{comment.user.uname}}</span>
      </div>
      <!-- 评论的内容 -->
      <div class="comment-content">
          <p>{{comment.content}}</p>
          <div class="comment-content-main">
              <span class="time">{{comment.created | showDate}}</span> <!--评论的时间-->
              <span>{{comment.style}}</span>
          </div>
          <div class="comment-content-img">
              <img :src="item" alt=""  v-for="(item,index) in comment.images" :key="index">
          </div>
      </div>
  </div>
</template>

<script>
// 商品的评论信息
import {formatDate} from 'common/utils'
export default {
  name: 'DetalisCommentInfo',
  props:{
      comment:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  filters:{
      showDate(value){
          const date=new Date(value*1000)
          return formatDate(date,'yyyy-MM-dd hh:mm')
      }
  }
}
</script>

<style scoped>
#comment-info{
    padding: 20px 8px;
    margin-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
}
.comment-title{
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 20px;
    border-bottom: 1px solid #eee;
}
.comment-title span{
    color: #333;
    font-size: 16px;
}
.comment-logo{
    padding: 10px 0;
}
.comment-logo img{
    width: 40px;
}
.comment-logo span{
    position: relative;
    top: -14px;
    margin-left: 10px;
}
.comment-content p{
    font-size: 14px;
}
.comment-content-main{
    margin: 10px 0;
}
.time{
    margin-right: 10px;
}
.comment-content-img img{
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-right: 5px;
}
</style>