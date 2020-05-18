<template>
  <div class="profileBottom">
    <div><img src="~assets/img/profile/购物车.png" alt="" />我的购物车</div>
    <div><img src="~assets/img/profile/下载.png" alt="" />下载购物APP</div>
  </div>
</template>

<script>
export default {
  name: "ProfileBottom"
};
</script>

<style scoped>
.profileBottom div {
  height: 40px;
  line-height: 40px;
  border-top: solid 2px #eee;
}
.profileBottom div img {
  width: 20px;
  height: 20px;
  margin: 0 10px -3px;
}
</style>