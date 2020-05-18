<template>
  <div class="profileCenter">
    <div>
      <img src="~assets/img/profile/邮件.png" alt="">我的消息
    </div>
    <div>
      <img src="~assets/img/profile/礼物.png" alt="">积分商城
    </div>
    <div>
      <img src="~assets/img/profile/卡包.png" alt="">会员卡
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCenter"
};
</script>

<style scoped>
.profileCenter {
  border-bottom: solid 10px #eee;
}
.profileCenter div {
  height: 40px;
  line-height: 40px;
  border-bottom: solid 2px #eee;
}
.profileCenter div img {
  width: 20px;
  height: 20px;
  margin: 0 10px -3px;
}
</style>