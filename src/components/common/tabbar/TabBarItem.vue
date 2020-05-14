<template>
  <div class="tab-bar-item" @click='itemClick'>
    <!-- 使用插槽时，最好包装一下，不然替换时容易出错 -->
    <div v-if='!isshow'><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style='isActive'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'orange',
    }
  },
  computed: {
    isshow() {
      // 进行路径判断
      // obj.indexOf(x,y)检索obj是否有x,从y位置开始检索（不写默认从0开始），如果有则返回对应的位置，没有则返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActive() {
      return this.isshow ? ({color:this.activeColor}) : {}
    }
  },
  // data () {
  //   return {
  //     // isshow:true
  //   }
  // },
  methods: {
    itemClick() {
      // console.log('itemClick');
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>

.tab-bar-item{
  flex: 1;
  /* 移动端的tab-bar一般是49px */
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}

</style>