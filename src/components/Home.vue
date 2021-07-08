<template>
  <div class="page-wrapper">
    <div class="wrapper">
      <div class="wrapper-header">
        <p class="header_label">智二代 · 超脑开发特训营</p>
        <div class="header_title">
          <img :src="title" alt="" />
        </div>
      </div>
      <div class="wrapper-content">
        <div class="earth">
          <img :src="global" class="global" alt="" />
          <img :src="mountain" class="mountain" alt="" />
        </div>
      </div>
      <div class="wrapper-button" @click="play">
        <van-button type="info">马上打桩</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: require('assets/home/title.png'),
      global: require('assets/home/global.png'),
      mountain: require('assets/home/mountain.png')
    }
  },
  methods: {
    play() {
      this.$store.commit('CHANGECURRENTPAGE', 'Login')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-wrapper {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-content: center;
  padding: 10% 0;
  overflow: hidden;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.wrapper-header {
  margin-bottom: 9px;
  .header_label {
    color: #6b8ff5;
    font-size: 16px;
    margin-bottom: 32px;
    letter-spacing: 4px;
  }
  .header_title {
    width: 213px;
    height: 94px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
.wrapper-content {
  margin-bottom: 50px;
  .earth {
    position: relative;
  }
  .global {
    width: 264px;
  }
  .mountain {
    width: 148px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.wrapper-button {
  width: 155px;
  height: 44px;
  background: url(../assets/home/button.png) no-repeat top center/ 100% 100%;
  margin: 5% auto 0;
  border-radius: 5px;
  overflow: hidden;
  span {
    color: #105ef5;
    font-size: 16px;
    line-height: 44px;
    font-weight: bold;
  }
  .van-button--normal {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
}
@media only screen and (max-device-height: 600px) and (orientation: portrait) {
  .page-wrapper {
    padding: 5% 0;
  }
  .wrapper-content {
    margin-bottom: 20px;
  }
  .wrapper-button {
    margin-top: 0;
  }
  .wrapper-header {
    .header_label {
      margin-bottom: 20px;
    }
  }
}
@media only screen and (min-device-height: 750px) and (max-device-height: 1024px) and (orientation: portrait) {
  .wrapper-content {
    margin-bottom: 60px;
  }
  .wrapper-header {
    .header_label {
      margin-bottom: 40px;
    }
  }
  .wrapper-header {
    margin-bottom: 15px;
  }
  .wrapper-button {
    margin-top: 13%;
  }
}
</style>
