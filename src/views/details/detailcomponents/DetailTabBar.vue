<template>
  <div class="detail-tab-bar">
    <NavBar>
      <div slot="left" @click="backClick" class="back">＜</div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div></NavBar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailTabBar",
  data() {
    return {
      titles: ["商品", "参数", "评论"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>

.active {
  color: var(--color-tint);
}
.back {
  font-size: 20px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
</style>