<template>
  <div class="cartTotal">
    <div class="left">
      <div class="leftcheckall">
        <lable class="checkBox">
          <input  type="checkbox">
        </lable>
        <slot name="checkall">
          全选
        </slot>
      </div>
      <div class="lefttotal">
        <slot name="total">合计￥0.00</slot>
      </div>
    </div>
    <div class="right">
      <slot name="account">去结算（0）</slot>
    </div>
  </div>
  全选
</template>

<script>
  export default {
    name: "Carttotal"
  }
</script>

<style scoped>
  .cartTotal {
    display: flex;
    justify-content: space-between;
    position: fixed;
    position: absolute;
    bottom: 50px;
    width: 100%;
    /*line-height: 44px;*/
    height: 45px;
    z-index: 9;
    background: rgba(226, 220, 220, 0.99);
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.28);
  }

  .left {
    display: flex;
    justify-content: space-between;

  }

  .lefttotal, .leftcheckall {
    padding-left: 15px;
    width: 100px;
  }

  input[type="checkbox"] {
    outline: none;
    appearance: none;
    border: 1px solid pink;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .checkBox input[type="checkbox"]:checked {
    background: url("../../../assets/img/shopcart/dui.png") center ;
    background-size: 16px;
  }
  .right {
    width: 100px;
    background: orangered;
    color: #ffffff;
    text-align: center;
  }

  /*没写完*/
  .left, .right {
    line-height: 45px;
    /*background: lightseagreen;*/
  }

  .center {
    flex: 1;
    /*background: red;*/
    /*color: #ffffff;*/
    text-align: center;
  }

</style>
