<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <CateTabbar :ccateresult="cateresult" ></CateTabbar>
  </div>
  <router-view/>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CateTabbar from "../../components/common/categoryTabBar/CateTabbar";
  import {getcategorydata, getsubcategorydata} from "../../network/home";
  import Shangyi from "../../components/content/cateTabBar/Shangyi";


  export default {
    name: "Category",
    components: {
      NavBar,CateTabbar,Shangyi
    },
    data(){
      return{
        cateresult:null,
        shangyiresult:null
      }
    },
    mounted() {
      getcategorydata().then(res =>
      {
        this.cateresult=res.data.category.list
        console.log(this.cateresult)
      })
      getsubcategorydata().then(res =>
      {
        this.shangyiresult=res.data.list
        console.log(this.shangyiresult)
      })


    },
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }

</style>
