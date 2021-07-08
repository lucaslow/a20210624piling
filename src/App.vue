<template>
  <div id="app">
    <!-- <router-view /> -->
    <transition name="slide-forward">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import 'styles/global.scss';
#app {
  font-family: NotoSansSC-Light, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
/* 路由转场样式 */
.slide-forward-enter {
  opacity: 1;
}
.slide-forward-enter-active {
  transition: all 0.2s ease-in-out;
}
.slide-forward-leave-active {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.page-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 1px;
  color: #434343;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
@font-face {
  font-family: 'NotoSansSC-Light';
  font-weight: 100;
  font-style: normal;
  font-display: auto;
  src: url('https://creative-tool.oss-cn-shenzhen.aliyuncs.com/font/SourceHanSansCN-Light.otf');
}
</style>
