/* 活动页 */
<template>
  <div class="page-wrapper">
    <div class="wrapper-header">
      <div class="user-wrap_left">
        <div class="user-wrap_avator">
          <img :src="avator" alt="" />
        </div>
        <img :src="avatorIcon" class="avator-icon" alt="" />
      </div>
      <div class="user-wrap_center">
        <span class="nickname">荔小枝</span>
        <div class="progress-wrapper">
          <van-progress color="#FFC254" :percentage="50" stroke-width="9" />
        </div>
        <div class="progress-label">
          <span>打桩：</span>
          <span>5/21天</span>
        </div>
      </div>
      <div class="user-wrap_rigth">
        <div class="change-button">切换学员</div>
        <div class="scope-box">
          <img :src="coinIcon" class="coin" alt="" />
          <div class="scope-content">
            <span>打桩金币</span>
            <span class="nums">88888888</span>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-content">
      <div class="activity-task activity-block">
        <Task />
      </div>
      <div class="activity-calendar activity-block">
        <Calendar />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Activity',
  data() {
    return {
      avator: require('assets/activity/avator.jpg'),
      avatorIcon: require('assets/activity/avatorIcon.png'),
      coinIcon: require('assets/activity/coin.png')
    }
  },
  components: {
    Task: () => import(/* webpackChunkName: "Other" */ 'components/task'),
    Calendar: () =>
      import(/* webpackChunkName: "Other" */ 'components/calendar')
  },
  methods: {
    backToLogin() {
      this.$store.commit('CHANGECURRENTPAGE', 'Login')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-wrapper {
  overflow: hidden;
}
.wrapper-header {
  box-sizing: border-box;
  width: 100%;
  height: 114px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(../assets/activity/bg.png) no-repeat top center/ cover;
}
.wrapper-content {
  padding: 0 10px;
}
.user-wrap_left {
  width: 70px;
  height: 70px;
  position: relative;
  .avator-icon {
    width: 67px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 77%;
  }
}
.user-wrap_avator {
  width: 61px;
  height: 61px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
}
.user-wrap_center {
  width: 180px;
  .nickname {
    color: #ffffff;
    font-size: 18px;
    font-weight: normal;
    // margin-bottom: 16px;
    display: block;
    text-align: left;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .progress-wrapper {
    margin: 16px auto 5px;
  }
  .van-progress {
    background-color: #094cce;
  }
  .progress-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 3px;
  }
}
.user-wrap_rigth {
  width: 85px;
  .change-button {
    width: 78px;
    height: 21px;
    margin: 0 auto 8px;
    background: url(../assets/activity/change.png) no-repeat top center/100%
      100%;
    color: #fff;
    font-size: 11px;
    line-height: 21px;
    padding-left: 30%;
  }
  .scope-box {
    width: 83px;
    height: 60px;
    background: url(../assets/activity/coinBg.png) no-repeat top center/100%
      100%;
    margin: 0 auto;
    position: relative;
    .coin {
      width: 34px;
      position: absolute;
      right: -11%;
      top: -13%;
    }
    .scope-content {
      width: 85%;
      height: 100%;
      margin: 0 auto;
      color: #fff;
      font-size: 10px;
      letter-spacing: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        width: 100%;
      }
      .nums {
        color: #ffc254;
        margin-top: 2px;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
/* content */
.wrapper-content {
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
}
.activity-task {
  width: 100%;
  height: 189px;
}
.activity-block {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 4px 4px 2px #e9e8e8;
  margin-top: 20px;
}
.activity-calendar {
  flex: 1;
  overflow: hidden;
}
</style>
