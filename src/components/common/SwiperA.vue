<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="imgli in clist" class="swiper-slide">
        <a :href="imgli.link">
        <img :src="imgli.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.css'
  export default {
    name: "SwiperA",
    data(){
      return{}
    },
    props:{
      clist:{
        type:String,
        require:true
      }
    },

    updated() {
      let mySwiper=new Swiper('.swiper-container',{
        autoplay:3000,
        loop:true
      })

    }
  }


</script>

<style scope>
  .swiper-container{
    /*margin-top: 50px;*/
    width: 100%;
    /*height: 200px;*/
    padding-top: 40px;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
