<template>
<div>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物街
    </template>
  </NavBar>
  <SwiperA :clist="result"></SwiperA>
  <Circle :ccircle="circle"></Circle>
  <SortTabbar  class="sort-tabbar"></SortTabbar>
<!--  <Popular :cpopdata="popdata"></Popular>-->
  <router-view/>
</div>

</template>

<script>

  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import SwiperA from "../../components/common/SwiperA";
  import Circle from "../../components/common/circle/Circle";
  import SortTabbar from "../../components/common/sortTabBar/SortTabbar";


  export default {
    name: "Home",
    components:{
      NavBar,SwiperA,Circle,SortTabbar
    },
    data(){
      return{
        // result:null
        // imglist:[
        //   require("../../assets/img/lunbo/1.jpg"),
        //   require("../../assets/img/lunbo/2.jpg"),
        //   require("../../assets/img/lunbo/3.jpg.webp")]
        result:null,
        circle:null,
        // popdata:null

      }
    },

    mounted() {
      getHomeMultidata().then(res =>
      {
        this.result=res.data.banner.list
        console.log(this.result)
        this.circle=res.data.recommend.list
        console.log(this.circle)
      })
      //  新数据要在这里添加函数
      // getHomedata().then(res =>
      // {
      //   this.popdata=res.data.list
      //   console.log(this.popdata)
      // })
    },



  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
  /*.sort-tabbar{*/
  /*  background: lightseagreen;*/
  /*}*/

</style>
