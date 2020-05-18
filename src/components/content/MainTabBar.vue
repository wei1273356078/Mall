<template>
  <TabBar>
      <tab-bar-item path='/home' activeColor='orange'>
        <!-- 在DOM元素标签中使用路径别名时  要加 ~ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='orange'>
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='orange'>
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='orange'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>