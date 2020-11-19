<template>
  <div class="circle">
    <div v-for="circlei in ccircle"  class="circleContent">
      <div class="img">
        <a :href="circlei.link">
          <img :src="circlei.image" alt="">
        </a>
      </div>
      <p>{{circlei.title}}</p>
    </div>
  </div>
  <div class="circle">
    <div v-for="circlei in ccircle"  class="circleContent">
      <div class="img">
        <a :href="circlei.link">
          <img :src="circlei.image" alt="">
        </a>
      </div>
      <p>{{circlei.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Circle",
    props:{
      ccircle:{
        type:String,
        require:true
      }
    },
  }

</script>

<style scoped>
  .circle{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

  }
  .circleContent{
    width: 100px;
    height: 100px;
    /*background: lightseagreen;*/
  }
  .circle .img{
    width: 80px;
    height: 80px;
    background: pink;
    border-radius: 50%;
  }
  .circle .img img{
    width: 100%;
    height: 100%;
  }
  .circleContent p{
    font-size: 13px;
    text-align: center;
  }

</style>
