<template>
  <div class="cartlistitem" :class="{check:checked}">
    <img class="icon" src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.cartlistitem {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ddd;
}
.check {
  background-color: red;
}
</style>