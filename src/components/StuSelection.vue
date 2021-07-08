/* 选择学生页 */
<template>
  <div class="page-wrapper">
    <div class="back" @click="backToLogin">
      <img :src="back" class="back-icon" alt="" />
      <span>返回添加学员</span>
    </div>
    <div class="wrapper">
      <div class="wrapper-header">
        <img :src="icon" alt="" />
        <p class="header_label">本次提交作业的学员是：</p>
      </div>
      <div class="wrapper-content">
        <div class="selection">
          <select name="student" id="student" v-model="selection">
            <option
              v-for="student in studentLists"
              :value="student.id"
              :key="student.id"
              >{{ student.name }}</option
            >
          </select>
        </div>
      </div>
      <div class="wrapper-button" @click="confirm">
        <van-button type="info">确定</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StuSelection',
  data() {
    return {
      icon: require('assets/stuSelection/icon.png'),
      back: require('assets/stuSelection/back.png'),
      studentLists: [
        {
          id: 1,
          name: '李xx'
        },
        {
          id: 2,
          name: '量xx'
        }
      ],
      selection: '请选择'
    }
  },
  methods: {
    backToLogin() {
      this.$store.commit('CHANGECURRENTPAGE', 'Login')
    },
    confirm() {
      this.$store.commit('CHANGECURRENTPAGE', 'Activity')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10% 0;
  overflow: hidden;
}
.back {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10%;
  top: 5%;
  .back-icon {
    width: 28px;
  }
  span {
    font-size: 15px;
    color: #434343;
    letter-spacing: 3px;
    margin-left: 10px;
  }
}
.wrapper {
  width: 80%;
  margin: 0 auto;
}
.wrapper-header {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  .header_label {
    // color: #6b8ff5;
    margin-left: 10px;
    font-size: 16px;
    // margin-bottom: 32px;
    letter-spacing: 4px;
  }
  img {
    width: 18px;
    height: 22px;
    display: block;
  }
}
.wrapper-content {
  margin-bottom: 80px;
  .selection {
    width: 100%;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #434343;
  }
}
.wrapper-button {
  width: 155px;
  height: 44px;
  background: url(../assets/stuSelection/button.png) no-repeat top center/ 100%
    100%;
  margin: 5% auto 0;
  border-radius: 5px;
  overflow: hidden;
  span {
    color: #fff;
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
select {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 5px 10px;
  font-size: 15px;
}
@media only screen and (max-device-height: 600px) and (orientation: portrait) {
  .page-wrapper {
    padding: 5% 0;
  }
  .wrapper-content {
    margin-bottom: 50px;
  }
  .wrapper-button {
    margin-top: 0;
  }
  .wrapper-header {
    .header_label {
      // margin-bottom: 20px;
    }
  }
}
@media only screen and (min-device-height: 750px) and (max-device-height: 1024px) and (orientation: portrait) {
  .wrapper-content {
    margin-bottom: 100px;
  }
  .wrapper-header {
    .header_label {
      // margin-bottom: 40px;
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
