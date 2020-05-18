<template>
  <div id="app">
    <!-- 保持状态不被销毁 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
