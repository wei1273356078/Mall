<template>
  <div class="pop">
    <div class="pop-item">
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
      <img @load="imgItem" src="~assets/img/home/new.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
  methods: {
    imgItem() {
      this.$bus.$emit("imgItem");
      // console.log('------');
    }
  }
};
</script>

<style scoped>
.pop {
  display: flex;
}
.pop-item {
  flex: 1;
}
.pop img {
  width: 48%;
  margin: 1%;
}
</style>