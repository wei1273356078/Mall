<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
    <ProfileTop />
    <ProfileCenter />
    <ProfileBottom />
  </div>
</template>

<script>
import ProfileTop from "./profilecomponents/ProfileTop"
import ProfileCenter from "./profilecomponents/ProfileCenter"
import ProfileBottom from "./profilecomponents/ProfileBottom"

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Profile",
  components: {
    ProfileTop,
    ProfileCenter,
    ProfileBottom,
    NavBar
  }
};
</script>

<style scoped>
#profile {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
}
</style>