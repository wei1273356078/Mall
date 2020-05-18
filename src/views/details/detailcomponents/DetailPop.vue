<template>
  <div class="detailPop">
    <img src="~assets/img/detail/pop.png" alt="" />
    <div class="title">
      <h3>
        海边度假飘逸沙滩裙女夏季新款韩版chic小心机露肩荷叶边雪纺碎花连衣裙女大摆长裙子仙
      </h3>
      <p class="p1">
        <span>￥75.6</span><del>￥108.00</del><span>优惠价</span>
      </p>
      <p class="p2">
        <span>销量 909852</span><span>收藏 153100</span><span>退货补运费</span>
      </p>
      <p class="p3">
        <span>72小时发货</span><span>全国包邮</span><span>7天无理由退货</span>
      </p>
    </div>
    <img src="~assets/img/detail/pop1.png" alt="" />
    <img src="~assets/img/detail/pop2.png" alt="" />
    <img src="~assets/img/detail/pop3.png" alt="" />
  </div>
</template>

<script>

export default {
  name: "DetailPop"
};
</script>

<style scoped>
.detailPop {
  height: 1260px;
}
.title {
  padding: 0 8px;
}
img {
  width: 100%;
}
.title h3 {
  padding: 10px 0;
}
.p1 span:nth-child(1) {
  color: red;
  font-size: 25px;
  margin-right: 5px;
}
.p1 del {
  font-size: 15px;
  margin-right: 5px;
}
.p1 span:nth-child(3) {
  color: #fff;
  font-size: 15px;
  background-color: red;
  padding: 2px 8px;
  border-radius: 15px;
}
.p2 {
  display: flex;
}
.p2 {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.p2 span {
  flex: 1;
  text-align: center;
}
.p3 {
  display: flex;
}
.p3 {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.p3 span {
  flex: 1;
  text-align: center;
}
</style>