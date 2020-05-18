<template>
  <div class="cartlist">
    <li v-for="(item, index) in this.$store.getters.cartList" :key="index">
      <div v-show="item.id == 1" class="box">
        <cart-list-item
          class="icon"
          :checked="item.check"
          @click.native="itemClick"
        />
        <img src="~assets/img/cart/pop1.png" alt="" />
        <div class="text">
          <p class="title">
            海边度假飘逸沙滩裙女夏季新款韩版chic小心机露肩荷叶边雪纺碎花连衣裙女大摆长裙子仙
          </p>
          <p class="p1">建议零售价￥108.00</p>
          <span class="price">￥{{ item.price }}</span>
          <span class="span1">X1</span>
        </div>
      </div>
      <div v-show="item.id == 2" class="box">
        <cart-list-item class="icon" />
        <img src="~assets/img/cart/new1.png" alt="" />
        <div class="text">
          <p class="title">
            夏季新款韩版吊带背心女外穿打底衫短款无袖性感吊带背心上衣女
          </p>
          <p class="p1">建议零售价￥49.90</p>
          <span class="price">￥{{ item.price }}</span>
          <span class="span1">X1</span>
        </div>
      </div>
      <div v-show="item.id == 3" class="box">
        <cart-list-item class="icon" />
        <img src="~assets/img/cart/jx1.png" alt="" />
        <div class="text">
          <p class="title">
            铜氨丝阔腿裤女夏2020新款高腰直筒宽松显瘦百搭拖地休闲裤
          </p>
          <p class="p1">建议零售价￥70.00</p>
          <span class="price">￥{{ item.price }}</span>
          <span class="span1">X1</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  methods: {
    itemClick() {
      // const arr = this.$store.getters.cartList;

      // console.log(this.arr1);

      // console.log(this.$store.getters.cartList)
      // this.$store.getters.cartList[0].check = !this.$store.getters.cartList[0].check
      // for (let i in arr) {
      //   if (arr) {
      //     arr[i].check = !arr[i].check;
      //   } else {
      //     arr[i].check = true;
      //   }

      //   // arr[i].check = !arr[i].check;
      //   console.log(!arr[i].check);
      // }
      this.$toast.show('有Bug。。。。')
    }
  }
};
</script>

<style scoped>
.cartlist li {
  list-style: none;
}
.box {
  padding: 10px;
  height: 125px;
  border-bottom: solid 2px #eee;
}
.icon {
  float: left;
  margin-top: 42.5px;
  margin-left: -5px;
  margin-right: 5px;
}
img {
  border-radius: 10px;
  height: 100px;
  width: 70px;
  float: left;
  margin-right: 5px;
}
.text {
  width: calc(100%);
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  margin-bottom: 20px;
}
.p1 {
  font-size: 15px;
  margin-bottom: 20px;
}
.price {
  color: red;
  float: left;
  font-size: 20px;
}
.span1 {
  float: right;
  font-size: 20px;
}
</style>