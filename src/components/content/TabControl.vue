<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="clickItem(index)"
      class="controlItem"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style>
.tabControl {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.controlItem {
  flex: 1;
}
.controlItem span {
  padding: 5px;
}
.active span{
  color: var(--color-high-text);
  border-bottom: solid 2px var(--color-high-text);
}
</style>