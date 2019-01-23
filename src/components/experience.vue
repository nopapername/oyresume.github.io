<template>
  <div class="expcontent">
    <div class="container animated flipInX">
      <div class="row">
        <div class="col-12">
          <div class="midcontent">
            <div class="exp-container">
              <span class="myexperience">我的经历</span>
              <img :src="imgsrc" @mouseenter="changeimg" @mouseleave="recover" :class="inAndOut">
              <div class="line"></div>
              <div class="exp-point">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="timePoint1">
                <span>2019年至今</span>
                <div class="exp-desc">
                  <h4>目前正在找实习</h4>
                  <p style="color: green;">[进阶初级前端工程师]</p>
                  <h6>具备前端基础技能，掌握vue框架基础，能简单运用webpack，git等工具</h6>
                </div>
              </div>
              <div class="timePoint2">
                <span>20xx年xx月</span>
                <div class="exp-desc">
                  <h4>·····</h4>
                  <p style="color: green;">[························]</p>
                  <h6>································································································</h6>
                </div>
              </div>
              <div class="timePoint3">
                <span>2016年9月</span>
                <div class="exp-desc">
                  <h4>就读于 四川师范大学计算机科学与技术专业</h4>
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
  width: 100%;
  height: 100%;
  display: block;
  background: url('../assets/bg4.jpg');
  background-size: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.midcontent {
  position: relative;
  top: 5%;
  width: 100%;
}
.exp-container {
  position: relative;
  left: 30%;
}
.myexperience {
  position: absolute;
  left: -200px;
  color: aliceblue;
  font-size: 30px;
  background-color: rgba(255, 68, 0, 0.5);
  cursor: pointer;
}
.exp-container img {
  position: relative;
  border-radius: 50%;
  border: 10px solid rgba(148, 75, 23, 0.5);
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
  left: 60px;
  width: 10px;
  height: 600px;
  background-color: rgba(148, 75, 23, 0.5);
}
.exp-point {
  position: relative;
  top: -550px;
  left: 48px;
  width: 35px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.point {
  width: 25px;
  height: 25px;
  background-color: rgb(155, 88, 40);
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
  top: -1040px;
  left: -110px;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: brown;
}
.timePoint2 {
  position: relative;
  top: -877px;
  left: -110px;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: brown;
}
.timePoint3 {
  position: relative;
  top: -715px;
  left: -110px;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: brown;
}
span {
  position: relative;
  top: 15px;
  padding: 10px;
  font-family: '华文琥珀';
  font-size: 20px;
  background-color: rgba(180, 180, 180, 0.699);
  border-radius: 10px;
}
.exp-desc {
  width: 600px;
  color: rgb(212, 212, 212);
  position: relative;
  left: 230px;
  top: -50px;
  cursor: pointer;
}
.exp-desc:hover {
  color: greenyellow;
  transition: all 1s;
}
</style>
