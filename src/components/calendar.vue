/* 日历页 */
<template>
  <div class="page-calendar">
    <div class="page-header">
      <span class="page-dot"></span>
      <p>我的打桩日历</p>
    </div>
    <div class="page-content">
      <div class="calendar">
        <div
          class="calendar-item"
          v-for="(calendar, index) in calendarData"
          :key="index"
          :class="calendar.status"
        >
          <div class="item-wrap">
            <span>{{ calendar.time }}</span>
            <span class="item-wrap_label">{{ label[calendar.status] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calendar',
  data() {
    return {
      label: {
        done: '已完成',
        undone: '未完成',
        unsubmit: '待提交',
        lock: '待开启'
      },
      calendarData: [
        {
          time: 'Day1(6/23)',
          status: 'done' // status --> done undone unsubmit lock
        },
        {
          time: 'Day2(6/24)',
          status: 'unsubmit' // status --> done undone unsubmit lock
        },
        {
          time: 'Day3(6/25)',
          status: 'done' // status --> done undone unsubmit lock
        },
        {
          time: 'Day4(6/26)',
          status: 'done' // status --> done undone unsubmit lock
        },
        {
          time: 'Day5(6/27)',
          status: 'unsubmit' // status --> done undone unsubmit lock
        },
        {
          time: 'Day6(6/28)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day7(6/29)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        },
        {
          time: 'Day8(6/30)',
          status: 'lock' // status --> done undone unsubmit lock
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.page-calendar {
  overflow: hidden;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}
.page-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  .page-dot {
    width: 16px;
    height: 16px;
    background-color: #ffc254;
    border-radius: 50%;
    display: block;
    overflow: hidden;
  }
  p {
    color: #434343;
    font-size: 16px;
    letter-spacing: 3px;
    margin-left: 10px;
  }
}
.page-content {
  flex: 1;
  overflow: auto;
}
.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .calendar-item {
    width: 95px;
    height: 43px;
    margin: 0 15px 11px 0;
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .done {
    background-image: url(../assets/activity/done.png);
  }
  .undone {
    background-image: url(../assets/activity/undone.png);
  }
  .unsubmit {
    background-image: url(../assets/activity/unsubmit.png);
  }
  .lock {
    background-image: url(../assets/activity/lock.png);
  }
  .item-wrap {
    width: 70%;
    margin: 8% 0 0 28%;
    span {
      display: block;
      color: #fff;
      letter-spacing: 1px;
      font-size: 9px;
    }
    .item-wrap_label {
      font-size: 13px;
    }
  }
}
</style>
