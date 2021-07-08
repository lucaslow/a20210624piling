<template>
  <div class="pages">
    <transition name="slide-forward">
      <component :is="currentPage"></component>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Home from 'components/Home.vue'
export default {
  name: 'HomePage',
  components: {
    Home,
    Login: () => import(/* webpackChunkName: "Other" */ 'components/Login'),
    StuSelection: () =>
      import(/* webpackChunkName: "Other" */ 'components/StuSelection'),
    Activity: () =>
      import(/* webpackChunkName: "Other" */ 'components/Activity'),
    Question: () =>
      import(/* webpackChunkName: "Other" */ 'components/question')
  },
  computed: {
    ...mapState({
      currentPage: state => state.currentPage
    })
  },
  data() {
    return {
      // componentData: [
      //   {
      //     id: 'home',
      //     component: 'Home'
      //   },
      //   {
      //     id: 'stuSelection',
      //     component: 'StuSelection'
      //   }
      // ]
    }
  }
}
</script>
<style lang="scss" scoped>
.pages {
  width: 100%;
  height: 100%;
}
</style>
