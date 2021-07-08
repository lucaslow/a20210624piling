/* 大脑扩容页 */
<template>
  <div class="page-mind">
    <div class="page-wrap">
      <div
        class="question"
        v-for="(question, index) in questions"
        :key="question.id"
      >
        <div class="question-label">
          <span class="circle"></span>
          <span class="label">题目{{ ++index }}</span>
        </div>
        <div class="question-box">
          <div
            class="item"
            v-for="(item, index_) in question.label"
            :key="index_"
          >
            {{ item }}
          </div>
        </div>
        <div class="question-result">
          <div class="result-item time">
            <span>记忆时长:</span>
            <div class="input">
              <van-field placeholder="请输入记忆时长" />
            </div>
          </div>
          <div class="result-item correct">
            <span>正确数量:</span>
            <div class="input">
              <van-field placeholder="请输入正确数量" />
            </div>
          </div>
        </div>
      </div>
      <div class="submit-button">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mind',
  data() {
    return {
      questions: [
        {
          id: 'Q1',
          label: [
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒'
          ]
        },
        {
          id: 'Q2',
          label: [
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒'
          ]
        },
        {
          id: 'Q3',
          label: [
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒',
            '盲盒'
          ]
        }
      ]
    }
  },
  components: {},
  methods: {
    backToLogin() {
      this.$store.commit('CHANGECURRENTPAGE', 'Login')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-mind {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .page-wrap {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
  }
}
.question-label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .circle {
    width: 12px;
    height: 12px;
    background: #32b16c;
    border-radius: 50%;
    display: block;
  }
  .label {
    font-size: 13px;
    margin-left: 5px;
    letter-spacing: 3px;
  }
}
.question-box {
  width: 100%;
  border-left: 1px solid #313131;
  border-bottom: 1px solid #313131;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4% 0;
  .item {
    line-height: 25px;
    color: #434343;
    font-size: 12px;
    text-align: center;
    width: 20%;
    border: 1px solid #313131;
    border-bottom: 0;
    border-left: 0;
  }
}
.question {
  margin-bottom: 20px;
}
.question-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.result-item {
  width: 139px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    white-space: nowrap;
    margin-bottom: 5px;
  }
  .input {
    width: 139px;
    height: 31px;
    background: url(../../../assets/question/input.png) no-repeat top center/
      100% auto;
    .van-field {
      width: 100%;
      height: 100%;
      line-height: 31px;
      border: none;
      background: transparent;
      padding: 0 5px;
    }
  }
}
.submit-button {
  width: 296px;
  height: 33px;
  background: url(../../../assets/question/button.png) no-repeat top center/100%
    100%;
  color: #fff;
  font-size: 14px;
  line-height: 33px;
}
</style>
