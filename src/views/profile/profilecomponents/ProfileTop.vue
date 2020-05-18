<template>
  <div class="profileTop">
    <div class="login">
      <a href="#" class="left">
        <img src="~assets/img/profile/icon.jpeg" alt="" />
      </a>
      <a href="#" class="center">
        <span>登录/注册</span>
        <img src="~assets/img/profile/手机.png" alt="" />
        <span>暂无绑定手机号</span>
      </a>
      <a href="#" class="right">></a>
    </div>
    <div class="money">
      <div class="l">
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop"
};
</script>

<style scoped>
.login {
  display: flex;
  height: 100px;
  background-color: var(--color-tint);
}
.login a {
  color: #fff;
}
.login .left {
  width: 120px;
  padding: 10px 20px;
}
.login .left img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.login .center {
  flex: 1;
  margin: 25px 0 0 0;
}
.login .center span:nth-child(1) {
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
}
.login .center span:nth-child(2) {
  display: block;

}
.login .center img {
  width: 20px;
  height: 20px;
  margin-left: -3px;
  margin-bottom: -5px;
}
.login .right {
  width: 40px;
  font-size: 30px;
  margin-top: 30px;
}
.money {
  display: flex;
  border-bottom: solid 15px #eee;
}
.money div {
  flex: 1;
  border-left: solid 2px #eee;
}
.money .l {
  border: none;
}
.money div p {
  font-size: 13px;
  text-align: center;
  margin: 10px 0;
}
.money div span {
  font-size: 20px;
  color: red;
  font-weight: 600;
}
</style>