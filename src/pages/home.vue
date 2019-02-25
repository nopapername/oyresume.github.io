<template>
  <div>
    <div class="d-none d-md-block">
      <div class="my-head shake-slow shake-constant shake-constant--hover">
        <img src="../assets/headimg.jpg">
        <h5>NoProperName</h5>
        <h6><span>OYJH</span> 's resume</h6>
        <p>QQ:1019825864</p>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" :style="{height:myHeight}">
        <swiper-slide><topmain :topHeight="myHeight"></topmain></swiper-slide>
        <swiper-slide><introduce :introHeight="myHeight"></introduce></swiper-slide>
        <swiper-slide><skills :skillHeight="myHeight"></skills></swiper-slide>
        <swiper-slide><experience :expHeight="myHeight"></experience></swiper-slide>
        <swiper-slide><production :proHeight="myHeight"></production></swiper-slide>
        <swiper-slide><bottomotherthing :bottHeight="myHeight"></bottomotherthing></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="d-md-none">
      <phonePage></phonePage>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import topmain from '../components/topmain'
import introduce from '../components/introduce'
import skills from '../components/skills'
import experience from '../components/experience'
import production from '../components/production'
import bottomotherthing from '../components/bottomotherthing'
import phonePage from '../components/phonePage'

export default {
  name: 'home',
  props: ['myHeight'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        direction: 'vertical',
        autoHeight: true,
        mousewheel: true,
        setWrapperSize: true,
        threshold: 5
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    topmain,
    introduce,
    skills,
    experience,
    production,
    bottomotherthing,
    phonePage
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.my-head {
  position: absolute;
  width: 230px;
  height: 70px;
  background-color: rgba(155, 155, 155, 0.5);
  top: 5%;
  left: 2%;
  border-radius: 15px;
  z-index: 3;
  cursor: pointer;
}
.my-head img {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
}
.my-head h5 {
  position: absolute;
  top: 12px;
  left: 70px;
}
.my-head h6 {
  position: absolute;
  top: 42px;
  left: 80px;
  color: black;
}
.my-head span {
  padding: 0 8px;
  border-radius: 5px;
  background-color: black;
  color: white;
}
.my-head:hover {
  color: #964300;
}
.swiper-container,.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet {
  margin: 30px !important;
  width: 17px;
  height: 17px;
  border: 4px solid rgb(212, 212, 212);
}
.swiper-pagination-bullet:hover {
  border: 1px solid rgb(159, 165, 255);
  box-shadow: 0 0 8px rgb(0, 17, 255);
}
.swiper-pagination-bullet-active {
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0099ff;
  opacity: 1;
  transition: 0.5s all ease;
  transform: scale(1);
  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
  animation-delay: 200ms;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  70%,90% {
    transform: scale(2);
  }
  100% {
    opacity: 1;
  }
}
</style>
