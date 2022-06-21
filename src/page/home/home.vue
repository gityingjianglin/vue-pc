<template>
  <div class="home-page">
    1111111
    <div @click="logout">登出</div>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import { outLogin } from '@/utils/userCenter'
  export default {
    name: "home",
    data () {
      return {
        contentHeight: {},
        scrollTop: 0
      }
    },
    components: { HelloWorld },
    methods: {
      logout () {
        outLogin()
      }
    },
    mounted () {
    },
    destroyed () {
      
    }
  }
</script>

<style scoped lang="scss">
</style>