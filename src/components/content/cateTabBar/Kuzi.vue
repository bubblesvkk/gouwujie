<template>
  <div>
    <div id="Wrap">
      <div v-for="syitem in kuziresult" class="imgContent">
        <a :href="syitem.link">
          <img :src="syitem.image" alt="">
        </a>

        <p>{{syitem.title}}</p>

      </div>

    </div>
  </div>
</template>

<script>
  import {getkuzidata} from "../../../network/home";

  export default {
    name: "Kuzi",
    data() {
      return {
        kuziresult: null
      }
    },
    mounted() {
      getkuzidata().then(res => {
        this.kuziresult = res.data.list
        console.log(this.kuziresult)
      })


    },
  }
</script>

<style scoped>

  #Wrap {
    padding-top: 49px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 90px;
    width: 200px;
    /*height: 100%;*/
    /*background: lightseagreen;*/
    margin-bottom: 50px;
  }

  .imgContent {
    width: 80px;
    height: 110px;
    /*background: lightblue;*/
  }

  .imgContent img {
    width: 100%;

  }

  .imgContent p {
    text-align: center;
  }
</style>
