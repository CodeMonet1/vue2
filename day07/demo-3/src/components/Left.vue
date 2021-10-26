<template>
  <div class="left-container">
    <h3>Left组件</h3>
    <button @click="getInfo">发起GET请求</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}
</script>

<style>
.left-container {
  background-color: pink;
  min-height: 200px;
  flex: 1;
}
</style>
