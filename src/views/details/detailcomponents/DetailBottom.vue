<template>
  <div class="detailBottom">
    <div class="imgItem">
      <div @click="service">
        <img src="~assets/img/detail/客服.png" alt="" />
        <h4>客服</h4>
      </div>
      <div @click="shop">
        <img src="~assets/img/detail/店铺.png" alt="" />
        <h4>店铺</h4>
      </div>
      <div @click="collect">
        <img src="~assets/img/detail/收藏.png" alt="" />
        <h4>收藏</h4>
      </div>
    </div>
    <div class="cart" @click="cart">加入购物车</div>
    <div class="buy" @click="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  data() {
    return {
      isShow: false,
      title: "我是toast"
    };
  },
  methods: {
    service() {
      this.$toast.show("客服小姐姐忙碌中", 2000);},
    shop() {
      this.$toast.show("关注店铺成功", 2000);},
    collect() {
      this.$toast.show("添加收藏成功", 2000);
    },
    cart() {
      // this.$toast.show("添加购物车成功", 2000);
      this.$emit('addToShop')
    },
    buy() {
      this.$toast.show("请在购物车中结算", 2000);
    }
  }
};
</script>

<style scoped>
.detailBottom {
  height: 49px;
  display: flex;
  background-color: #eee;
}
h4 {
  font-weight: 500;
}
.imgItem {
  display: flex;
  flex: 1;
}
.imgItem div {
  flex: 1;
  text-align: center;
}
img {
  margin-bottom: -2px;
  margin-top: 3px;
  width: 24px;
  height: 24px;
}
.cart {
  width: 80px;
  font-weight: 700;
  text-align: center;
  line-height: 49px;
  background-color: #ffe817;
}
.buy {
  color: #fff;
  width: 80px;
  font-weight: 700;
  text-align: center;
  line-height: 49px;
  background-color: rgb(238, 78, 104);
}
</style>