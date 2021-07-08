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
          <div class="item">
            <img :src="question.question" alt="" />
          </div>
        </div>
        <div class="question-result">
          <p>— 请上传该题作答照片</p>
          <!-- <div class="upload-lists"></div> -->
          <div class="upload-button">
            <van-uploader
              v-model="resultList"
              :before-read="beforeRead"
              :after-read="afterRead"
            />
          </div>
        </div>
      </div>
      <div class="submit-button">提交</div>
    </div>
  </div>
</template>
<script>
import UploadFile from 'utils/upload-to-oss'
export default {
  name: 'Mind',
  data() {
    return {
      questions: [
        {
          id: 'Q1',
          question: require('assets/question/q1.png')
        }
      ],
      resultList: []
    }
  },
  components: {},
  methods: {
    async afterRead(file) {
      console.log(file)
    },
    async beforeRead(file) {
      const type = file.type === 'image/png' ? 'png' : 'jpg'
      const ossInstance = new UploadFile({ file, type })
      const result = await ossInstance.uploadByFile(file)
      console.log(result)
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
    width: 294px;
    height: 178px;
    border: 1px solid #333;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      object-fit: contain;
    }
  }
}
.question {
  margin-bottom: 20px;
}
.question-result {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  p {
    font-size: 14px;
    letter-spacing: 3px;
    display: block;
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
.upload-button {
  margin-top: 10px;
}
</style>
<style>
.van-uploader__upload,
.van-uploader__wrapper,
.van-uploader {
  width: 100%;
  height: 100%;
  background: none;
}
.van-uploader__upload {
  width: 294px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: #eeeeee;
}
</style>
