<template>
  <div class="topmaincontent">
    <div class="bg-imgs animated flipInX">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/1.jpg" :style="{height:topHeight}"></swiper-slide>
        <swiper-slide><img src="../assets/2.jpg" :style="{height:topHeight}"></swiper-slide>
        <swiper-slide><img src="../assets/3.jpg" :style="{height:topHeight}"></swiper-slide>
        <swiper-slide><img src="../assets/4.jpg" :style="{height:topHeight}"></swiper-slide>
      </swiper>
    </div>
    <div class="somecontent">
      <div class="mid-content">
        <div class="card" @mouseenter="addcardAnimate"  @mouseleave="delcardAnimate" :class="cardani">
          <div class="particles">
            <vue-particles
              color="#7DF031"
              :particleOpacity="0.5"
              linesColor="#D5D5D5"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="5"
              :linesWidth="2"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="2"
              :moveSpeed="3"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode="push"
            >
            </vue-particles>
          </div>
          <div class="card-body text-center animated flip">
            <h1 class="card-title display-5" style="font-family: Jokerman">Welcome,This is my resume</h1>
            <h3 class="card-text" style="font-family: Bradley Hand ITC">Take a little time,take to know me</h3>
            <p>我叫 欧阳佳豪</p>
            <p>正致力于成为一名合格的前端工程师</p>
            <p>1019825864@qq.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topmain',
  props: ['topHeight'],
  data () {
    return {
      swiperOption: {
        speed: 2000,
        setWrapperSize: true,
        effect: 'flip', // 切换效果
        loop: true, // 环路
        touchRatio: 0, // 无法拖动
        autoHeight: true,
        autoplay: {
          delay: 4000, // 1秒切换一次
          disableOnInteraction: false, // 触碰后自动切换也不停止
          waitForTransition: false
        }
      },
      cardani: ''
    }
  },
  methods: {
    addcardAnimate () {
      this.cardani = 'heartBeat'
    },
    delcardAnimate () {
      this.cardani = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topmaincontent {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.particles {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.swiper-slide img {
  width: 100%;
}
.bg-imgs {
  position: relative;
  z-index: -1;
}
.somecontent {
  position: absolute;
  top: 0px;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-content {
  width: 60%;
}
.card {
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(187, 187, 187);
}
.card:hover {
  box-shadow: 8px 12px 50px rgba(0, 0, 0, 0.842);
}
.card p{
  color: rgb(255, 255, 255);
  font-size: 25px;
  font-family: 'STKaiti','Courier New', Courier, monospace;
}
</style>
