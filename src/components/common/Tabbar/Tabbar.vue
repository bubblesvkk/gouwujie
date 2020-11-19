<template>
  <div id="tabbar">
<!--    不具名-->
<!--    整个一个大的导航栏-->
      <TabBarItem path="/home" active-color="#F781D8">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Home.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Home2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category" active-color="#F781D8">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Category.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Category2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>分类</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/shopcart" active-color="#F781D8">
        <!--    具名插槽-->
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/shopcart.png" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/shopcart2.png" alt="">
        </template>
        <template v-slot:slot-text>
          <div>购物车</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/profile" active-color="#F781D8">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/Profile.svg" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/Profile2.svg" alt="">
        </template>
        <template v-slot:slot-text>
          <div>我的</div>
        </template>
      </TabBarItem>
  </div>
</template>

<script>

  import TabBarItem from "./Tab-bar-item";

  export default {
    name: "Tabbar",
    components:{
     TabBarItem
    }
  }
</script>

<style scoped>
  #tabbar{
    z-index: 9;
    width: 100%;
    /*margin-top: 50px;*/
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
  .tab-bar-item>img{
    width: 24px;
    height: 24px;
  }




</style>
