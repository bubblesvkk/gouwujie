<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--    底部导航的每一个-->
    <!--    不具名-->
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>
    <slot v-if="!isActived" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <!--    可以这样 :class="{active:isActived}"-->
  </div>
</template>

<script>
  export default {
    name: "Cate-Tabbar-item",
    data(){
      return{
        // isActived:false
      }
    },
    computed:{
      isActived(){
        //有点绕 自己想 如果找得到路径（这里是） 就给isActived 取反 即找不到 图片是黑的 否则else为蓝色
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActived?{color:this.activeColor}:{}
      }

    },
    props:{
      path:String,
      activeColor: {
        type:String,
        default:'#e89abe'
      }
    },
    methods:{
      itemClick(){
        console.log('kkkk')
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    position: relative;
    display: flex;
    align-items: center;
    /*text-align: center;*/
    justify-content: center;
    height: 49px;
  }
  .active{
    color: lightblue;
  }

</style>
