<template>
  <div id="tabbar">
    <!--    不具名-->
    <!--    整个一个大的导航栏-->
    <SortTabbarItem path="/home/popular" active-color="#e89abe">
      <template v-slot:slot-text>
        <div>流行</div>
      </template>
      <template v-slot:slot-img>
        <img src="@/assets/img/sorttabbar/jianhao.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/sorttabbar/jianhaoactive.png" alt="">
      </template>
    </SortTabbarItem>
    <SortTabbarItem path="/home/newstyle" active-color="#e89abe">
      <template v-slot:slot-text>
        <div>新款</div>
      </template>
      <template v-slot:slot-img>
        <img src="@/assets/img/sorttabbar/jianhao.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/sorttabbar/jianhaoactive.png" alt="">
      </template>
    </SortTabbarItem>
    <SortTabbarItem path="/home/selection" active-color="e89abe">
      <template v-slot:slot-text>
        <div>精选</div>
      </template>
      <template v-slot:slot-img>
        <img src="@/assets/img/sorttabbar/jianhao.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/sorttabbar/jianhaoactive.png" alt="">
      </template>
    </SortTabbarItem>
  </div>
</template>

<script>
  import SortTabbarItem from "../sortTabBar/Sort-Tabbar-item";

  export default {
    name: "SortTabbar",
    components:{
      SortTabbarItem
    }
  }
</script>

<style scoped>
  #tabbar{
    width: 100%;
    padding-top: 5px;
    height: 45px;
    /*position: fixed;*/
    /*bottom: 0;*/
    display: flex;
    justify-content: space-around;
    /*background: #00fdde;*/
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.09);
  }
  .tab-bar-item>img{
    width: 24px;
    height: 24px;
  }


</style>
