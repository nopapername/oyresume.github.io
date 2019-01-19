<template>
  <swiper :options="swiperOption" ref="mySwiper" :style="{height:myHeight}">
    <swiper-slide><topmain></topmain></swiper-slide>
    <swiper-slide><introduce></introduce></swiper-slide>
    <swiper-slide><skills></skills></swiper-slide>
    <swiper-slide><experience></experience></swiper-slide>
    <swiper-slide><production></production></swiper-slide>
    <swiper-slide><bottomotherthing></bottomotherthing></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
.swiper-slide {
  background-color: aquamarine;
}
</style>
