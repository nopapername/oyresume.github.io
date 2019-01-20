<template>
  <div id="app" :style="{height:myHeight}">
    <router-view :myHeight="myHeight"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // 设置样式铺满全屏幕
      myHeight: document.documentElement.clientHeight + 'px'
    }
  },
  created () {
    try {
      var loading = document.getElementById('loading')
      console.log(loading)
      if (loading != null) {
        document.body.removeChild(loading)
      }
    } catch (e) {

    }
  },
  mounted () {
    // 动态设置背景图的高度为浏览器可视区域高度

    // 监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this
    window.onresize = () => {
      that.myHeight = `${document.documentElement.clientHeight}px`
    }
  }
}
</script>
<style>
html {
  overflow: hidden;
}
#app {
  width: 100%;
}
</style>
