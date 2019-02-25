<template>
  <div class="expcontent">
    <img src="../assets/bg4.jpg" :style="{height:expHeight}">
    <div class="midcontent">
      <span class="myexperience">我的经历</span>
      <div class="exp-container animated flipInX">
        <div class="line">
          <img :src="imgsrc" @mouseenter="changeimg" @mouseleave="recover" :class="inAndOut">
          <div class="exp-point">
            <div class="point-content">
              <div class="point"></div>
              <div class="timePoint1">
                <span>2019年至今</span>
                <div class="exp-desc">
                  <h4>目前正在找实习</h4>
                  <p style="color: green;">[进阶初级前端工程师]</p>
                  <h6>具备前端基础技能，掌握vue框架基础，能简单运用webpack，git等工具</h6>
                </div>
              </div>
            </div>
            <div class="point-content">
              <div class="point"></div>
              <div class="timePoint1">
                <span>20xx年xx月</span>
                <div class="exp-desc">
                  <h4>···</h4>
                  <p style="color: green;">[········]</p>
                  <h6>······················</h6>
                </div>
              </div>
            </div>
            <div class="point-content">
              <div class="point"></div>
              <div class="timePoint1">
                <span>2016年9月</span>
                <div class="exp-desc">
                  <h4>就读于四川师范大学计算机科学与技术专业</h4>
                  <p style="color: green;">[本科：目前大三在读]</p>
                  <h6>学校里表现普普通通，一名老实的大学生，没获得过啥证书，也没啥值得炫耀的奖项，前端是我的兴趣，自学能力中等偏上！</h6>
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
  name: 'experience',
  props: ['expHeight'],
  data () {
    return {
      imgsrc: './static/img/zhijingfont.jpg',
      inAndOut: ''
    }
  },
  methods: {
    changeimg () {
      this.inAndOut = 'inRotate'
      var that = this
      setTimeout(function () {
        that.imgsrc = './static/img/changefont.png'
      }, 100)
    },
    recover () {
      this.inAndOut = 'outRotate'
      var that = this
      setTimeout(function () {
        that.imgsrc = './static/img/zhijingfont.jpg'
      }, 100)
    }
  }
}
</script>
<style scoped>
.expcontent {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.expcontent img {
  width: 100%;
  position: absolute;
}
.myexperience {
  position: relative;
  top: -50px;
  color: aliceblue;
  font-size: 30px;
  background-color: rgba(129, 129, 129, 0.5);
  cursor: pointer;
}
.midcontent {
  width: 70%;
  height: 70%;
  text-align: center;
}
.exp-container {
  position: relative;
  top: -50px;
  width: 100%;
  height: 100%;
  text-align: initial;
}
.inRotate {
  box-shadow: 0 0 32px rgb(128, 128, 128);
  animation:inRotate 0.2s;
}
.outRotate {
  box-shadow: 0 0 32px rgb(128, 128, 128, 0);
  animation: outRotate 0.2s;
}
@keyframes inRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes outRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.line {
  position: relative;
  top: 20%;
  left: 26%;
  width: 10px;
  height: 80%;
  background-color: rgba(104, 104, 104, 0.699);
}
.line img {
  width: 120px;
  height: 120px;
  position: relative;
  top: -120px;
  left: -55px;
  border-radius: 50%;
  border: 10px solid rgba(129, 129, 129, 0.5);
}
.exp-point {
  position: absolute;
  top: 10%;
  left: -12px;
  width: 35px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.point-content {
  position: relative;
}
.point {
  margin: 0 auto;
  width: 25px;
  height: 25px;
  background-color: rgb(180, 180, 180);
  border-radius: 50%;
  cursor: pointer;
}
.point:hover {
  border: 5px solid white;
  box-shadow: 0 0 8px white;
  transition: all 0.3s linear;
}
.timePoint1 {
  position: relative;
  top: -15px;
  left: -130px;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: rgba(165, 42, 42, 0.479);
}
span {
  margin-top: 10px;
  position: absolute;
  padding: 10px;
  font-family: '华文琥珀';
  font-size: 20px;
  background-color: rgba(180, 180, 180, 0.699);
  border-radius: 10px;
}
.exp-desc {
  font-family: '隶书';
  position:relative;
  top: -40px;
  left: 250px;
  width: 550px;
  color: rgb(212, 212, 212);
  position: absolute;
  cursor: pointer;
  overflow: hidden;
  margin-top: 20px;
}
.exp-desc:hover {
  color: greenyellow;
  transition: all 1s;
}
.exp-desc h4 {
  padding: 0;
  margin: 0;
}
.exp-desc p {
  padding: 0;
  margin: 0;
  width: 80%;
}
.exp-desc h6 {
  padding: 0;
  margin: 0;
  width: 80%;
}
</style>
