<template>
  <div class="page-wrapper">
    <div class="wrapper-header">
      <img :src="loginIcon" alt="loginIcon" class="loginIcon" />
      <div class="wrapper-header_label">
        <p>首次登陆or换设备登录？</p>
        <p>先告诉我你是谁吧？</p>
      </div>
    </div>
    <div class="wrapper-content">
      <div class="row-item row-item_tele">
        <div class="row-item_label">
          <img :src="teleIcon" class="teleIcon" />
          <span>请输入报名手机号：</span>
        </div>
        <div class="row-item_input">
          <van-field v-model="phone" type="tel" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="row-item row-item_tele">
        <div class="row-item_label">
          <img :src="codeIcon" class="teleIcon" />
          <span>请输入学员号码：</span>
        </div>
        <div class="row-item_input">
          <van-field v-model="code" placeholder="请输入号码" />
        </div>
      </div>
    </div>
    <div class="wrapper-button" @click="submit">
      <van-button type="info">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loginIcon: require('assets/login/icon.png'),
      teleIcon: require('assets/login/tele.png'),
      codeIcon: require('assets/login/code.png'),
      phone: '',
      code: ''
    }
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    teleValidator(val) {
      return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
        val
      )
    },
    submit() {
      /* 验证手机号 */
      const isTele = this.teleValidator(this.phone)
      if (!isTele) {
        this.$toast.fail('请输入正确的手机号')
        return
      }
      this.$store.commit('CHANGECURRENTPAGE', 'StuSelection')
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper-header {
  position: relative;
  margin: 10% auto 15%;
  .loginIcon {
    width: 80px;
    height: 91px;
    margin: 0 auto;
    display: block;
  }
  .wrapper-header_label {
    position: absolute;
    left: 0;
    right: 0;
    top: 24%;
    p {
      font-size: 18px;
      letter-spacing: 3px;
      margin-bottom: 5px;
    }
  }
}
.row-item_tele {
  .teleIcon {
    width: 20px;
    height: 20px;
  }
}
.row-item {
  margin-bottom: 30px;
}
.row-item_label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  span {
    font-size: 15px;
    letter-spacing: 2px;
    margin-left: 5px;
  }
}
.wrapper-content {
  width: 85%;
  margin: 0 auto;
  .row-item_input {
    width: 302px;
    height: 39px;
    margin: 0 auto;
    background: url(../assets/login/input.png) no-repeat top center/ 100% 100%;
  }
}
.van-cell {
  background-color: transparent;
  height: 100%;
  padding: 5px 15px 5px 10px;
  line-height: 2;
  font-size: 15px;
}
.wrapper-button {
  width: 155px;
  height: 44px;
  background: url(../assets/login/button.png) no-repeat top center/ 100% 100%;
  margin: 20% auto 0;
  border-radius: 5px;
  overflow: hidden;
  span {
    color: #fff;
    font-size: 16px;
    line-height: 44px;
  }
  .van-button--normal {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
}
@media only screen and (min-device-height: 750px) and (max-device-height: 1024px) and (orientation: portrait) {
  .wrapper-header {
    margin: 15% auto 20%;
  }
}
</style>
