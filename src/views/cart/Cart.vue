<template>
  <div>
    <nav-bar class="cart-nav"
      ><div slot="center">
        购物车({{ this.$store.state.cartList.length }})
      </div></nav-bar
    >
    <cartList class="cartList" />
    <CartCalculate class="cartBottom" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import cartList from './cartcomponents/CartList'
import CartCalculate from './cartcomponents/CartCalculate'

export default {
  name: "Collect",
  components: {
    NavBar,
    cartList,
    CartCalculate
  }
};
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
}
.cartList {
  margin-top: 44px;
}
.cartBottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>