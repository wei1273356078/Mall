<template>
  <div class="detailJX">
    <img src="~assets/img/detail/jx.png" alt="" />
    <div class="title">
      <h3>
        铜氨丝阔腿裤女夏2020新款高腰直筒宽松显瘦百搭拖地休闲裤
      </h3>
      <p class="p1">
        <span>￥49.00</span><del>￥70.00</del><span>优惠价</span>
      </p>
      <p class="p2">
        <span>销量 1674015</span><span>收藏 80814</span><span>退货补运费</span>
      </p>
      <p class="p3">
        <span>72小时发货</span><span>全国包邮</span><span>7天无理由退货</span>
      </p>
    </div>
    <img src="~assets/img/detail/jx1.png" alt="" />
    <img src="~assets/img/detail/jx2.png" alt="" />
    <img src="~assets/img/detail/jx3.png" alt="" />
  </div>
</template>

<script>

export default {
  name: "DetailJX"
};
</script>

<style scoped>
.detailJX {
  height: 1300px;
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