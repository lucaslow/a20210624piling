/* 任务展示页 */
<template>
  <div class="page-task">
    <div class="task-header">
      <span class="circle"></span>
      <p>今日打桩任务</p>
      <span>完成并分享+20金币</span>
    </div>
    <div class="task-content">
      <div class="task-item" v-for="task in tasks" :key="task.id">
        <div class="icon" :class="{ done: task.isDone }">
          <img :src="task.path" alt="" />
        </div>
        <div class="labels">
          <span class="task-label">{{ task.label }}</span>
          <span class="task-detail">{{ task.detail }}</span>
        </div>
      </div>
    </div>
    <div class="task-button">
      <span>马上打桩</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Task',
  data() {
    return {
      tasks: [
        {
          id: 'memory',
          path: require('assets/activity/memory.png'),
          label: '大脑扩容',
          detail: 'P12，3组词语',
          isDone: false
        },
        {
          id: 'mind',
          path: require('assets/activity/mind.png'),
          label: '思维卡点',
          detail: 'P15，2道思维题',
          isDone: false
        },
        {
          id: 'speak',
          path: require('assets/activity/speak.png'),
          label: '英语跟读',
          detail: 'P13，3遍跟读',
          isDone: false
        },
        {
          id: 'chinese',
          path: require('assets/activity/chinese.png'),
          label: '文学素养',
          detail: 'P16，1篇文风模仿',
          isDone: true
        }
      ]
    }
  },
  methods: {
    backToLogin() {
      this.$store.commit('CHANGECURRENTPAGE', 'Login')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-task {
  width: 100%;
  height: 100%;
  padding: 12px 21px;
}
.task-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-color: 1px solid #000;
    background-color: #105ef5;
    display: block;
    margin-right: 11px;
  }
  p {
    color: #000;
    font-size: 16px;
    letter-spacing: 3px;
    font-weight: bold;
    margin-right: 8px;
  }
  span {
    color: #ff2929;
    letter-spacing: 2px;
  }
}
.task-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  .task-item {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 15px 0;
    .icon {
      width: 29px;
      height: 29px;
      border-radius: 50%;
      background-color: #434343;
      overflow: hidden;
      margin-right: 8px;
      &.done {
        background-color: #ffc254;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin: 0 auto;
      }
    }
    .labels {
      color: #434343;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      span {
        display: block;
      }
      .task-label {
        font-size: 13px;
      }
      .task-detail {
        font-size: 10px;
        color: #7e7e7e;
      }
    }
  }
}
.task-button {
  width: 296px;
  height: 33px;
  background: url(../assets/activity/button.png) no-repeat top center/ 100% auto;
  span {
    color: #434343;
    font-size: 13.5px;
    line-height: 33px;
  }
}
</style>
