<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <div class="box">
   <Left></Left>
   <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'App',
  components: {
    Left,
    Right

  }
}
</script>

<style lang="less">
  .box {
    display: flex;;
  }
</style>
