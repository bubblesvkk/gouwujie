<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">购物街</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>


</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    width: 100%;
    line-height: 44px;
    z-index: 9;
    background: lightblue;
    /*padding-bottom: 5px;*/
  }

  /*没写完*/
  .left, .right {
    width: 60px;
    /*background: lightseagreen;*/
  }

  .center {
    flex: 1;
    /*background: red;*/
    /*color: #ffffff;*/
    text-align: center;
  }

</style>
