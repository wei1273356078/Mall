<template>
  <div id="detail">
    <DetailTabBar class="detailtabbar" />
    <BScroll class="bscroll">
      <div v-if="this.$route.params.id == 1" class="bsdetail">
        <DetailPop />
      </div>

      <div v-else-if="this.$route.params.id == 2" class="bsdetail">
        <DetailNew />
      </div>
      <div v-else-if="this.$route.params.id == 3">
        <DetailJX />
      </div>
    </BScroll>
    <DetailBottom class="detailbottom" @addToShop="addToShop" />
  </div>
</template>

<script>
import DetailTabBar from "./detailcomponents/DetailTabBar";
import DetailPop from "./detailcomponents/DetailPop";
import DetailNew from "./detailcomponents/DetailNew";
import DetailJX from "./detailcomponents/DetailJX";
import DetailBottom from "./detailcomponents/DetailBottom";

import BScroll from "components/common/scroll/BScroll";

export default {
  name: "Detail",
  data() {
    return {
      isShow: false,
      shop1: {
        id: 1,
        name: 'shop1',
        price: 75.6
      },
      shop2: {
        id: 2,
        name: 'shop2',
        price: 39.9
      },
      shop3: {
        id: 3,
        name: 'shop3',
        price: 49
      }
    };
  },
  components: {
    DetailTabBar,
    DetailPop,
    DetailNew,
    DetailJX,
    DetailBottom,
    BScroll
  },
  methods: {
    addToShop() {
      this.$toast.show('加入购物车成功')
      if (this.$route.params.id == 1) {
        this.$store.commit("addShop", this.shop1);
      }else if(this.$route.params.id == 2) {
        this.$store.commit("addShop", this.shop2);
      }else if(this.$route.params.id == 3) {
        this.$store.commit("addShop", this.shop3);
      }
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
}
.detailtabbar {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
/* .bsdetail {
  height: 100vh;
} */
.bscroll {
  height: calc(100vh - 93px);
}
.detailbottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
</style>
