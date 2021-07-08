/* 答题页 */
<template>
  <div class="page-question">
    <div class="wrapper-header">
      <div class="tips-label">
        <img :src="icon" class="icon" alt="" />
        <p>遇到难题的话，记得保持微笑。</p>
      </div>
    </div>
    <div class="wrapper-content">
      <div class="content-top">
        <div
          class="top-item"
          v-for="type in questionsType"
          :key="type.id"
          :class="[type.color, { current: type.id === currentType }]"
          @click="changeCurrentType(type.id)"
        >
          <span>{{ type.label }}</span>
        </div>
      </div>
      <div class="content-main">
        <transition name="slide-forward">
          <component :is="currentType" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  data() {
    return {
      icon: require('assets/question/icon.png'),
      questionsType: [
        {
          color: 'green',
          id: 'memory',
          label: '大脑扩容'
        },
        {
          color: 'blue',
          id: 'mind',
          label: '思维卡点'
        },
        {
          color: 'yellow',
          id: 'speak',
          label: '英语跟读'
        },
        {
          color: 'gray',
          id: 'chinese',
          label: '文学素养'
        }
      ],
      currentType: 'memory'
    }
  },
  components: {
    memory: () =>
      import(
        /* webpackChunkName: "Other" */ 'components/question/components/memory'
      ),
    mind: () =>
      import(
        /* webpackChunkName: "Other" */ 'components/question/components/mind'
      )
  },
  methods: {
    changeCurrentType(type) {
      if (type === this.currentType) return
      this.currentType = type
    }
  }
}
</script>
<style lang="scss" scoped>
.page-question {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.tips-label {
  width: 335px;
  height: 27px;
  margin: 0 auto;
  background-color: #e0e0e0;
  border-radius: 20px;
  text-align: center;
  position: relative;
  p {
    line-height: 27px;
    height: 100%;
    font-size: 13px;
    letter-spacing: 2px;
  }
  .icon {
    width: 16px;
    position: absolute;
    left: 5%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.wrapper-content {
  overflow: hidden;
  flex: 1;
}
.wrapper-header {
  margin-bottom: 16px;
}
.content-top {
  position: relative;
}
.top-item {
  width: 86px;
  height: 53px;
  background-position: top center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  color: #ffffff;
  font-size: 13px;
  span {
    letter-spacing: 1px;
    position: absolute;
    left: 6%;
    top: 30%;
    opacity: 0;
  }
  &.green {
    background-image: url(../../assets/question/green.png);
    z-index: 4;
  }
  &.blue {
    background-image: url(../../assets/question/blue.png);
    left: 14%;
    z-index: 3;
  }
  &.yellow {
    background-image: url(../../assets/question/yellow.png);
    left: 28%;
    z-index: 2;
  }
  &.gray {
    background-image: url(../../assets/question/gray.png);
    left: 42%;
    z-index: 1;
  }
  &.current {
    z-index: 5;
    span {
      opacity: 1;
    }
  }
}
.content-main {
  width: 100%;
  height: calc(100% - 45px);
  background: #fff;
  border-radius: 5px;
  border: 1px solid #313131;
  position: relative;
  z-index: 5;
  margin-top: 45px;
}
</style>
