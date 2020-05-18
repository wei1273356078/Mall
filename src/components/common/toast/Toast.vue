<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='默认值', duration=1500) {
      // console.log('我是DetailBottom发出的的事件');
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      },duration)
    }

  }
  
}
</script>

<style scoped>
  /* toast */
.toast {
  color: #fff;
  font-size: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  z-index: 9;
  background-color: rgba(0, 0, 0, .7);
}
</style>