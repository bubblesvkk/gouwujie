<template>
<div>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车（0）
    </template>
  </NavBar>
  <Carttotal></Carttotal>
</div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import Carttotal from "../../components/common/shopcartTotal/Carttotal";


  export default {
    name: "ShopCart",
    components: {
      NavBar,Carttotal
    },
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
