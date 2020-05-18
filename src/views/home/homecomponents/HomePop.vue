<template>
<div class="pop">
  <div class="pop-item" @click="itemImg">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
    <img @load="imgItem" src="~assets/img/home/popular.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'HomePop',
  data () {
    return {
      id: 1
    }
  },
  methods: {
    imgItem() {
      this.$bus.$emit('imgItem')
      // console.log('------');
    },
    itemImg() {
      this.$router.push('/detail/'+ this.id)
      // console.log(123);
    }
  }
}
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