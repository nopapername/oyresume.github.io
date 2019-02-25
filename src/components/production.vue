<template>
  <div class="procontent">
    <img src="../assets/bg2.jpg" :style="{height:proHeight}">
    <div class="pro-slider animated flipInX">
      <div><h3 class="shake-chunk shake-constant">This is picture exhibiton</h3></div>
      <div class="swiperbg">
        <swiper :options="swiperOption">
          <swiper-slide><img src="../assets/pro1.png"><span>粗糙的本简历网站</span></swiper-slide>
          <swiper-slide><img src="../assets/pro2.png"><span>纯div+css仿京东网站练习</span></swiper-slide>
          <swiper-slide><img src="../assets/pro3.png"><span>粗糙的漫威blog页面设计</span></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'production',
  props: ['proHeight'],
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pro-slider h3 {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'French Script MT';
  font-size: 50px;
}
.procontent img {
  position: absolute;
  z-index: -1;
  width: 100%;
}
.pro-slider {
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.swiperbg {
  height: 65%;
  width: 70%;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img{
  height: 100%;
  width: 100%;
}
span {
  position: relative;
  top: 100%;
  left: 30%;
  padding: 20px;
  color: rgba(153, 153, 153, 0.699);
  display: block;
  font-family: 'STxingkai'
}
</style>
