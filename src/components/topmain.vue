<template>
  <div class="topmaincontent">
    <div class="bg-imgs animated flipInX">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/2.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/3.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/4.jpg"></swiper-slide>
      </swiper>
    </div>
    <div class="somecontent">
      <div class="mid-content">
        <div class="container">
          <div class="row">
            <div class="col-8 offset-2">
              <div class="card" @mouseenter="addcardAnimate"  @mouseleave="delcardAnimate" :class="cardani">
                <div class="card-body text-center animated flip">
                  <h1 class="card-title display-4">Welcome,This is my resume</h1>
                  <h3 class="card-text">Take a little time,take to know me</h3>
                  <p>我叫 欧阳佳豪</p>
                  <p>正致力于成为一名合格的前端工程师</p>
                  <p>1019825864@qq.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topmain',
  data () {
    return {
      swiperOption: {
        speed: 1000,
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
.swiper-slide img {
  width: 100%;
  height: 100%;
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
}
.mid-content {
  position: relative;
  top: 30%;
}
.card {
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(173, 173, 173);
}
.card:hover {
  box-shadow: 8px 12px 50px rgba(0, 0, 0, 0.842);
}
.card p{
  color: rgb(255, 255, 255);
  font-size: 25px;
}
</style>
