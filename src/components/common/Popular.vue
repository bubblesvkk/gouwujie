<template>
  <div class="popular">
    <!--    <h2>这是流行界面</h2>-->
    <div v-for="cpopdatai in popdata" class="popularwrap">
      <div  class="popcontent">
        <a :href="cpopdatai.link">
          <img :src="cpopdatai.show.img" alt="">
        </a>
      </div>
      <p>{{cpopdatai.title}}</p>
    </div>
  </div>
  <router-view></router-view>

</template>

<script>


  import {getHomedata, getHomeMultidata} from "../../network/home";

  export default {
    name: "Popular",
    data() {
      return {
        popdata: null
      }
    },
    // props:{
    //   cpopdata:{
    //     type:String,
    //     require:true
    //   }
    // },
    mounted() {
      //  新数据要在这里添加函数
      getHomedata().then(res => {
        this.popdata = res.data.list
        console.log(this.popdata)
      })
    },

  }
</script>

<style scoped>
  .popular {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
    /*height: 100%;*/

  }

  .popularwrap {
    width: 185px;
    height: 360px;
    /*z-index: 9;*/
    /*background: pink;*/
  }

  .popcontent {
    width: 185px;
    height: 280px;
    /*background: lightblue;*/
  }

  .popcontent img {
    width: 100%;
    border-radius: 6px;
    height: 100%;
  }

</style>
