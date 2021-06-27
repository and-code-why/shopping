<template>
  <div id="login">
      <!-- 用户头像部分 -->
      <div class="login-log">
          <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <!-- 登录的信息部分 -->
      <div class="login-info">
          <div>登录/注册</div>
          <div class="phone">
              <img src="~assets/img/profile/phone.svg" alt="">
              <span>暂无绑定手机号</span>
          </div>
      </div>
      <div class="right">
          <img src="~assets/img/profile/right.svg" alt="">
      </div>
  </div>
</template>

<script>
// 用户登录信息
export default {
  name: 'ProflieLogin',
}
</script>

<style scoped>
#login{
    background-color: var(--color-tint);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 14px;
    justify-content: space-between;
}
.login-log img{
    width: 60px;
}
.login-info {
    margin-left: -140px;
}
.login-info img{
    width: 16px;
    vertical-align: middle;
    position: relative;
    right: 3px;
    top: -2px;
}
.phone{
    font-size: 13px;
    margin-top: 8px;
}
.right img{
    width: 20px;
}
</style>