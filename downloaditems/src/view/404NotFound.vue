

<template>
<h1>404 Not Found</h1>
  <h2>抱歉，页面走丢了！</h2>
  <a href="javascript:"@click="goHome">点我回家！或者等待<span>{{ countDown }}</span>s后自动跳转</a>
</template>

<script>
export default {
  name: '404NotFound',
  data(){
    return{
      countDown:4,
      timer: null
    }
  },
  methods:{
    goHome(){
      this.$router.replace({path:'/'})
      clearInterval(this.timer)
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.countDown >0 ? this.countDown-- : this.goHome()
    },1000)
  }

}
</script>

<style scoped>

</style>
