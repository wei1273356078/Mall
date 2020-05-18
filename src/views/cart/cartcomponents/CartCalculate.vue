<template>
  <div class="cartcalculate">
    <CartListItem @click.native="bug" class="b" />
    <span class="d">全选</span>
    <span class="a">合计：￥{{price}}</span>
    <span @click="calculate" class="c">去结算({{this.$store.state.cartList.length}})</span>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name: 'CartCalculate',
  components: {
    CartListItem
  },
  computed: {
    price() {
      return this.$store.state.cartList.reduce((preValue, item) => {
        return preValue + item.price
      }, 0)
    }
  },
  methods: {
    calculate() {
      if(this.$store.state.cartList.length == 0) {
        this.$toast.show('请挑选购买商品')
      }else {
        this.$toast.show('结算成功')
      }
    },
    bug() {
      this.$toast.show('有Bug。。。。')
    }
  }
}
</script>

<style scoped>
  .cartcalculate {
    display: flex;
    height: 40px;
  }
  .cartcalculate .b {
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 10px;
  }
  .cartcalculate .a {
    flex: 1;
    line-height: 40px;
  }
  .c {
    color: #fff;
    line-height: 40px;
    text-align: center;
    display: block;
    height: 40px;
    width: 100px;
    background-color: red;
    float: right;
  }
  .d {
    margin-right: 15px;
    line-height: 40px;
  }
</style>