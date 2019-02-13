<template>
  <div class="page animated zoomIn">
    <div class="top">
      <div class="container text-center">
        <div class="row">
          <div class="col-12">
            <div class="topcontents">
              <div class="card-body">
                <img class="topheadimg" src="../assets/introimg.jpg">
                <h1 class="card-title" style="font-family: Jokerman;font-size:32px;">Welcome,This is my resume</h1>
                <h3 class="card-text" style="font-family: Bradley Hand ITC;font-size:22px;">Take a little time,take to know me</h3>
                <p>我叫 欧阳佳豪<br>正致力于成为一名合格的前端工程师<br>1019825864@qq.com</p>
                <div class="myconnect">
                  <a href="http://github.com/nopapername/vue-resume" target="_blank" class="iconfont" id="pgithub" data-toggle="tooltip" data-placement="bottom" :title="github">&#xe6f6;</a>
                  <a href="#" class="iconfont" id="pweixin" data-toggle="tooltip" data-placement="bottom" :title="weixin" data-html="true">&#xe654;</a>
                  <a href="#" class="iconfont" id="pqq" data-toggle="tooltip" data-placement="bottom" :title="qq" data-html="true">&#xe66a;</a>
                  <a href="https://weibo.com/u/6020961867?topnav=1&wvr=6&topsug=1" target="_blank" class="iconfont" id="pweibo" data-toggle="tooltip" data-placement="bottom" :title="weibo">&#xe66b;</a>
                  <a href="https://blog.csdn.net/weixin_43388844" target="_blank" class="iconfont" id="pcsdn" data-toggle="tooltip" data-placement="bottom" :title="csdn">&#xe600;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro text-center">
      <div class="aboutme">
        <h3>关于我</h3>
        <p>
          您好，我叫欧阳佳豪，坐标成都。 我是四川师范大学计算机科学与技术专业2016级大三的学生，有着一定的编程基础，
          目前能熟练运用HTML5、CSS、Javascript等前端Web开发技术，
          熟悉bootstrap库、jquery库、Vue框架等的基础，
          能基本使用webpack、npm、git等工具,对前端很感兴趣，具有良好的自学能力，目前的规划是先找一份实习工作磨砺自我，积累工作经验，学习更多前端相关知识，
          想要学习一些后端相关知识以更好的应对前端各种工作，努力的成为一名合格的前端工程师！
        </p>
      </div>
      <div class="skills">
        <h3>技能掌握</h3>
        <p>1. 热爱前端，喜欢用最扎实的代码做出效果上最炫，代码上最合理的页面，
          能够兼容主流各种浏览器，比如ie8以上, chrome,firefox,opera。<br>2. 熟悉
          使用photoshop把设计的图片按照需要交互的要求进行效果实现。<br>3. 精通各种
          Web前端技术，包括HTML、DIV、CSS、Javascript、jQuery、AJAX、JSON、Cookie
          等。<br>4. 使用移动端的rem布局,响应式布局,解决不同移动端设备的适配和兼容问
          题<br>5. 熟悉bootstrap,Jquery类库进行pc端项目快速开发, 熟练使用Swiper,sui等
          插件进行移动端项目的开发。<br>6. 熟练使用github进行代码管理，使用git版本管理
          工具。<br>7. 熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原
          理。<br>8. 熟练使用Chrome 、Firefox等主流浏览器的开发人员工具调试页面。<br>9. 了
          解vue框架对模块化开发有着一定的理解。<br>10. 了解java,c++后
          台语言,了解mysql数据库，并对此有兴趣,期待向全栈方向发展<br></p>
        <div class="progressgroup">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 70%;">HTML5</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%;">CSS3</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style="width: 65%;">JavaScript</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style="width: 70%;">BootStrap</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%;">Jquery</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%;">Vue技术栈</div>
          </div>
        </div>
      </div>
      <div class="myexperence">
        <h3>我的经历</h3>
        <div class="exper">
          <div>
            <p><i class="circle"></i><span class="time">2019年至今</span></p>
            <p class="expcontent">目前正在找实习<br><span style="font-size: 12px;color:green;">[进阶初级前端工程师]</span><br>具备前端基础技能，掌握vue框架基础，能简单运用webpack，git等工具</p>
          </div>
          <div>
            <p><i class="circle"></i><span class="time">2016年9月</span></p>
            <p class="expcontent">就读于 四川师范大学计算机科学与技术专业<br><span style="font-size: 12px;color:green;">[本科:目前大三在读]</span><br>学校里表现普普通通，一名老实的大学生，没获得过啥证书，也没啥值得炫耀的奖项，前端是我的兴趣，自学能力中等偏上！</p>
          </div>
        </div>
      </div>
      <div class="myproduction">
        <h3>我的作品</h3>
        <div class="container">
          <div class="row">
            <div class="col-6 offset-3">
              <div class="exhibition">
                <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/pro1.png" width="200px" height="200px;"></swiper-slide>
                <swiper-slide><img src="../assets/pro2.png" width="200px" height="200px;"></swiper-slide>
                <swiper-slide><img src="../assets/pro3.png" width="200px" height="200px;"></swiper-slide>
                </swiper>
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
      github: 'Github',
      weixin: '<img src="./static/img/weixin.png" width="150px" height="150px">',
      qq: '<img src="./static/img/qq.png" width="150px" height="150px">',
      weibo: '新浪微博',
      csdn: 'CSDN',
      swiperOption: {
        effect: 'cube', // 切换效果
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 40,
          shadowScale: 0.5
        },
        speed: 1000,
        loop: true, // 环路
        autoHeight: true,
        autoplay: {
          delay: 3000, // 4秒切换一次
          disableOnInteraction: false // 触碰后自动切换也不停止
        }
      }
    }
  }
}
</script>
<style scope>
body {
  overflow: auto;
}
.top {
  background: url('../assets/phonetopbg.jpg') no-repeat;
  background-size: 100%;
  width: 100%;
}
.topheadimg {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  color: rgb(138, 60, 29);
}
.topheadimg p {
  margin-top: 0 !important;
}
.myconnect {
  position: relative;
  top: -18px;
}
.myconnect a {
  text-decoration: none;
  color: black;
}
.iconfont {
  margin-left: 22px;
  font-size: 30px;
  cursor: pointer;
}
.myconnect a:nth-child(1):hover {
  color: rgb(65, 65, 65);
}
.myconnect a:nth-child(2):hover {
  color: rgb(13, 161, 0);
}
.myconnect a:nth-child(3):hover {
  color: rgb(0, 132, 255);
}
.myconnect a:nth-child(4):hover {
  color: rgb(118, 0, 165);
}
.myconnect a:nth-child(5):hover {
  color: rgb(197, 13, 0);
}
.aboutme {
  padding-top: 35px;
}
.aboutme h3 {
  position: relative;
  left: 35%;
  padding: 10px;
  border-bottom: 2px solid blueviolet;
  width: 150px;
}
.aboutme p {
  padding: 20px;
}
.skills {
  padding-top: 35px;
}
.skills h3 {
  position: relative;
  left: 35%;
  padding: 10px;
  border-bottom: 2px solid blueviolet;
  width: 150px;
}
.skills p {
  padding: 20px;
  text-align: left;
}
.progressgroup {
  padding: 0 20px;
}
.progress {
  margin-top: 10px;
}
.myexperence {
  padding-top: 35px;
}
.myexperence h3 {
  position: relative;
  left: 35%;
  padding: 10px;
  border-bottom: 2px solid blueviolet;
  width: 150px;
}
.exper {
  padding: 20px;
  text-align: left;
}
.circle {
  position: relative;
  top: 7px;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
}
.exper .time {
  margin-left: 20px;
  padding: 0 5px;
  background-color: rgb(255, 0, 98);
  border-radius: 5px;
}
.expcontent {
  position: relative;
  left: 13px;
  border-left: 2px solid rgb(0, 207, 52);
  padding: 10px 0;
  padding-left: 20px;
}
.myproduction {
  padding-top: 35px;
}
.myproduction h3 {
  position: relative;
  left: 35%;
  padding: 10px;
  border-bottom: 2px solid blueviolet;
  width: 150px;
}
.exhibition {
  margin-top: 50px;
  margin-bottom: 100px;
  width: 200px;
  height: 200px;
}
</style>
