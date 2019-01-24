<template>
  <div class="procontent">
    <div class="pro-slider  animated flipInX">
      <div class="swiperbg shake-chunk shake-constant">
        <h3>This is picture exhibiton</h3>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide class="text-center"><img src="../assets/pro1.png"><span>粗糙的本简历网站</span></swiper-slide>
        <swiper-slide class="text-center"><img src="../assets/pro2.png"><span>纯div+css仿京东网站练习</span></swiper-slide>
        <swiper-slide class="text-center"><img src="../assets/pro3.png"><span>粗糙的漫威blog页面设计</span></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        effect: 'cube', // 切换效果
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 120,
          shadowScale: 0.6
        },
        speed: 1000,
        loop: true, // 环路
        autoplay: {
          delay: 3000, // 4秒切换一次
          disableOnInteraction: false // 触碰后自动切换也不停止
        }
      }
    }
  }
}
</script>
<style scoped>
.procontent {
  width: 100%;
  height: 100%;
  display: block;
  background: url('../assets/bg2.jpg');
  background-size: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.pro-slider {
  position: relative;
  top: 12%;
  left: 30%;
  width: 40%;
  height: 500px;
}
.pro-slider img {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiperbg {
  position: absolute;
  left: -25%;
  top: -15%;
  width: 150%;
  height: 140%;
  background-color: rgba(255, 255, 255, 0.199);
  border-radius: 20px;
}
.swiperbg h3 {
  position: relative;
  left: 30px;
  font-family: 'French Script MT';
  font-size: 50px;
}
span {
  color: rgba(168, 168, 168, 0.692);
  display: block;
  margin-top: 20px;
  font-family: 'STxingkai'
}
</style>
