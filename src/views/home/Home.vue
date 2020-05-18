<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <TabControl
        class="tab-control1"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isShowTab"
      />
    <BScroll
      class="scroll"
      ref="scroll1"
      @scroll="Bscroll"
      :probe="3"
      :pullUpLoad="true"
    >
      <HomeBanner :banners="banners" @homeBannerImg="homeBannerImg" />
      <HomeRecommend :recommends="recommends" />
      <HomePopular />
      <TabControl
        class="tab-control2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <HomePop v-if="show0" />
      <HomeNew v-else-if="show1" />
      <HomeJX v-else />
      <HomeText class="home-text" />
    </BScroll>
    <HomeTop class="home-top" @click.native="homeTop" v-show="isShow" />
  </div>
</template>

<script>
import HomeBanner from "./homecomponents/HomeBanner";
import HomeRecommend from "./homecomponents/HomeRecommend";
import HomePopular from "./homecomponents/HomePopular";
import HomePop from "./homecomponents/HomePop";
import HomeJX from "./homecomponents/HomeJX";
import HomeNew from "./homecomponents/HomeNew";
import HomeTop from "./homecomponents/HomeTop";
import HomeText from './homecomponents/HomeText'

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";
import BScroll from "components/common/scroll/BScroll";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeRecommend,
    HomePopular,
    HomePop,
    HomeJX,
    HomeNew,
    NavBar,
    TabControl,
    BScroll,
    HomeTop,
    HomeText
  },
  data() {
    return {
      banners: [],
      recommends: [],
      isShow: false,
      show0: true,
      show1: false,
      tabOffsetTop: 0,
      isShowTab: false,
      saveScrollY: 0
    };
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    
  },
  mounted () {
    // 由于是静态图片，所以就注释了
    // const refresh = this.debounce(this.$refs.scroll1.scroll.refresh, 200)
    this.$bus.$on('imgItem', () => {
      // console.log('------');
      this.$refs.scroll1.scroll.refresh()
    })
  },
  activated () {
    // 设置当前位置
    this.$refs.scroll1.scrollTo(0, this.saveScrollY, 0);
    // 要重新刷新一下，尽可能的严谨
    this.$refs.scroll1.scroll.refresh()
  },
  deactivated () {
    // 设置离开时的位置
    this.saveScrollY = this.$refs.scroll1.scroll.y;
    // console.log(this.saveScrollY)
  },
  methods: {
    homeBannerImg() {
      // console.log(123)
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /* refresh调用的非常频繁，设置防抖函数 */
    // debounce(func, delay) {
    //   let timer = null;
    //   return (...args) => {
    //     if(timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     },delay)
    //   }
    // },
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.show0 = true;
          this.show1 = false;
          break;
        case 1:
          this.show1 = true;
          this.show0 = false;
          break;
        case 2:
          this.show0 = false;
          this.show1 = false;
      };
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    homeTop() {
      this.$refs.scroll1.scrollTo(0, 0, 500);
    },
    Bscroll(position) {
      // console.log(position);
      this.isShow = -position.y > 1000;
      this.isShowTab = -position.y > this.tabOffsetTop
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
}
.tab-control1 {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;

  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;  */
}
.home-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 6px;
}
</style>