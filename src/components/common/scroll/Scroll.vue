<template>
  <div ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
//封装better-scroll
import BetterScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data () {
      return {
          scroll:null
      }
  },
  props: {
      probeType:{  //动态传入probeType值决定是否派发 scroll 事件
          type:Number,
          default:0
      },
      pullUpLoad:{ //动态传入pullUpLoad值决定是否开启下拉加载更多
          type:Boolean,
          default:false
      }
  },
  mounted(){
      this.$nextTick(()=>{
        //   setTimeout(()=>{  //如果当前浏览器不支持 MutationObserver，会降级用 setTimeout 每隔 1s 来重复计算可滚动的高度，这样又能保证在图片加载完成之后，可滚动的高度计算正确。
            this.scroll=new BetterScroll(this.$refs.wrapper,{
                        click:true,  //BetterScroll 默认会阻止浏览器的原生 click 事件。当设置为 true,才能实现对click事件的监听
                        probeType:this.probeType,  //决定是否派发 scroll 事件,具体参数看官网
                        pullUpLoad:this.pullUpLoad
            });
            if(this.probeType===2||this.probeType===3){
                this.scroll.on('scroll',(position)=>{  //监听滚动位置
                    // console.log(position);
                    this.$emit('scroll',position)
                });
            }
            if(this.pullUpLoad===true){
                this.scroll.on('pullingUp',()=>{
                    // console.log('上拉加载更多');
                    this.$emit('pullingUp')
                });
            }
            console.log(this.scroll);
            console.log(this.scroll.hasVerticalScroll);
            console.log(this.scroll.scrollerHeight);
            console.log(this.scroll.wrapper);
        //   },1000)
      })
  },
  methods:{
      scrollTo(x,y,time=300){   //封装好的返回顶部的方法
          this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){  //监测到上拉刷新的动作之后，pullingUp 事件的消费机会只有一次，因此你需要调用 finishPullUp() 来告诉 BetterScroll 来提供下一次 pullingUp 事件的消费机会。
          this.scroll && this.scroll.finishPullUp()
      },
      refresh(){//图片加载完成,重新计算滑动区域的高度
        //console.log('okok');  //使用了防抖函数
        this.scroll && this.scroll.refresh() 
      },
      getScrollY(){
          return this.scroll.y ? this.scroll.y : 0
      }
  }
}
</script>

<style scoped>

</style>