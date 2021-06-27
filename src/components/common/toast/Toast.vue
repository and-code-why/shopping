<template>
  <div class="toast" v-show="isShow">
      <div>{{msg}}</div>
  </div>
</template>

<script>
//信息提示的弹窗
export default {
  name: 'Toast',
  /*props:{
      msg:{
          type:String,
          default:''
      },
      isShow:{
          type:Boolean,
          default:false
      }
  },*/
  data () {
      return {
          msg:'',
          isShow:false
      }
  },
  methods:{
      show(msg='默认文本',time=1500){
          this.isShow=true;
          this.msg=msg;
          setTimeout(() => {
              this.isShow=false
              this.msg=''
          }, time);
      }
  }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 13px 10px;
    font-size: 14px;
    z-index: 999;
    border-radius: 30px;
}
</style>