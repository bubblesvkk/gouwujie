<!--    <div v-for="item in ccateresult" v-for="(pathitem,index) in funcList" id="tabbar">-->

<!--    不具名-->
<!--    整个一个大的导航栏-->
<!--<CateTabbaritem path="/category/popularing" active-color="#e89abe">
  <template v-slot:slot-text>
    <div>正在流行</div>
  </template>
  <template v-slot:slot-img>
    <img src="@/assets/img/catebar/shuxian.png" alt="">
  </template>
  <template v-slot:slot-active-img>
    <img src="@/assets/img/catebar/shuxianactive.png" alt="">
  </template>
</CateTabbaritem>
<CateTabbaritem path="/category/shangyi" active-color="#e89abe">
  <template v-slot:slot-text>
    <div>上衣</div>
  </template>
  <template v-slot:slot-img>
    <img src="@/assets/img/catebar/shuxian.png" alt="">
  </template>
  <template v-slot:slot-active-img>
    <img src="@/assets/img/catebar/shuxianactive.png" alt="">
  </template>
</CateTabbaritem>
<CateTabbaritem path="/category/qunzi" active-color="#e89abe">
  <template v-slot:slot-text>
    <div>裙子</div>
  </template>
  <template v-slot:slot-img>
    <img src="@/assets/img/catebar/shuxian.png" alt="">
  </template>
  <template v-slot:slot-active-img>
    <img src="@/assets/img/catebar/shuxianactive.png" alt="">
  </template>
</CateTabbaritem>-->
<!--<template>
  <div id="tabWrap">
    <div v-for="item in ccateresult" id="tabbar">
      <CateTabbaritem path="/category/shangyi" active-color="#e89abe">
        <template v-slot:slot-text>
          <div>{{item.title}}</div>
        </template>
        <template v-slot:slot-img>
          <img src="@/assets/img/catebar/shuxian.png" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/catebar/shuxianactive.png" alt="">
        </template>
      </CateTabbaritem>

    </div>
  </div>
</template>-->

<template>
  <div  id="tabWrap">
    <div v-for="(item,index) in ccateresult" @click="getActive(index)"  :class="active == index?'active':''" id="tabbar">
      <CateTabbaritem :cfuncList="funcList[index]"  active-color="#e89abe">
        <template v-slot:slot-text>
          <div>{{item.title}}</div>
        </template>
        <template v-slot:slot-img>
          <img src="@/assets/img/catebar/shuxian.png" alt="">
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/catebar/shuxianactive.png" alt="">
        </template>
      </CateTabbaritem>

    </div>
  </div>
</template>


<script>
  import CateTabbaritem from "../categoryTabBar/Cate-Tabbar-item";

  export default {
    name: "CateTabbar",
    components: {
      CateTabbaritem
    },
    data(){
      return {
        funcList:[
          {com: '/category/popularing'},
          {com: '/category/shangyi'},
          {com: '/category/kuzi'},
          {com: '/category/qunzi'},
        ],
        active:0
      }
    },
    props: {
      ccateresult: {
        type: String,
        require: true
      },

    },

    methods:{
      getActive(index){
        console.log('切换分类')
        this.active = index;
      }

    },

  }
</script>

<style scoped>
  #tabWrap {
    padding-top: 46px;
    width: 90px;
    height: 100%;
    background: rgb(231, 227, 227);
    margin-bottom: 49px;
  }

  #tabbar {
    position: relative;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.09);
  }


  .tab-bar-item > img {
    position: absolute;
    left: -23px;
    top: -7px;
    width: 50px;
    height: 58px;
  }
  .active{
    color: #e89abe;
  }

</style>
