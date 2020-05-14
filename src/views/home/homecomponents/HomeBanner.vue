<template>
  <Banner>
    <banner-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeBannerImg">
      </a>
    </banner-item>
  </Banner>
</template>

<script>
import {Banner, BannerItem} from 'components/common/banner/index'


export default {
  name:'HomeBanner',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    homeBannerImg() {
      if(!this.isLoad)
        this.$emit('homeBannerImg')
        this.isLoad = true;
    }
  },
  components: {
    Banner,
    BannerItem
  }
}
</script>

<style>

</style>