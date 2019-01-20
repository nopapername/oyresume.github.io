<template>
  <div>
    <div class="d-none d-md-block">
      <swiper :options="swiperOption" ref="mySwiper" :style="{height:myHeight}">
        <swiper-slide><topmain></topmain></swiper-slide>
        <swiper-slide><introduce></introduce></swiper-slide>
        <swiper-slide><skills></skills></swiper-slide>
        <swiper-slide><experience></experience></swiper-slide>
        <swiper-slide><production></production></swiper-slide>
        <swiper-slide><bottomotherthing></bottomotherthing></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="d-md-none">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
        setWrapperSize: true
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
    bottomotherthing
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
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
