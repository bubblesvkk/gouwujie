<template>
  <div class="popular">
    <!--    <h2>这是流行界面</h2>-->
    <div v-for="cpopdatai in selectdata" class="popularwrap">
      <div class="popcontent">
        <a :href="cpopdatai.link">
          <img :src="cpopdatai.show.img" alt="">
        </a>
      </div>
      <p>{{cpopdatai.title}}</p>
    </div>
  </div>
</template>

<script>

  import {getselectiondata} from "../../network/home";

  export default {
    name: "Selection",
    data() {
      return {
        selectdata: null
      }
    },
    mounted() {
      //  新数据要在这里添加函数
      getselectiondata().then(res => {
        this.selectdata = res.data.list
        console.log(this.selectdata)
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
    margin-bottom: 40px;
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
