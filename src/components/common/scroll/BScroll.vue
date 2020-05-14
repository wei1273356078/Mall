<template>
  <div class="pop" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  props: {
    probe: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null,
      mes:'ddd'
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probe,
      pullUpLoad: this.pullUpLoad
    });

    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    });

    this.scroll.on('pullingUp', () => {
      // console.log('加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    }
  }
};
</script>

<style scoped>

</style>