<template>
  <div class="bottomcontent">
    <img src="../assets/bg5.jpg" :style="{height:bottHeight}">
    <div class="midcontent animated flipInX">
      <div class="mytopborder"></div>
      <div class="mybottomborder"></div>
      <div class="content text-center">
        <h2 class="myh2"><span style="color: blueviolet;margin-left:15px">前端 </span> <span style="color: darkkhaki;margin-left:15px">展望 </span> <span style="color: palevioletred;margin-left:15px">代码 </span> <span style="color: brown;margin-left:15px">未来</span></h2>
        <div class="line"></div>
        <h4 class="myh4">学习是一个充实愉悦的过程喜欢尝试，期待新鲜事物前端即兴趣，兴趣即未来行路有良友，便是捷径期待有机会与您共事！</h4>
        <h1 class="myh1 shake-opacity shake-constant"><span style="color: greenyellow">CONTACT</span> ME</h1>
        <div class="line"></div>
        <div class="myconnect">
          <a href="http://github.com/nopapername/vue-resume" target="_blank" class="iconfont" id="github" data-toggle="tooltip" data-placement="bottom" :title="github">&#xe6f6;</a>
          <a href="#" class="iconfont" id="weixin" data-toggle="tooltip" data-placement="bottom" :title="weixin" data-html="true">&#xe654;</a>
          <a href="#" class="iconfont" id="qq" data-toggle="tooltip" data-placement="bottom" :title="qq" data-html="true">&#xe66a;</a>
          <a href="https://weibo.com/u/6020961867?topnav=1&wvr=6&topsug=1" target="_blank" class="iconfont" id="weibo" data-toggle="tooltip" data-placement="bottom" :title="weibo">&#xe66b;</a>
          <a href="https://blog.csdn.net/weixin_43388844" target="_blank" class="iconfont" id="csdn" data-toggle="tooltip" data-placement="bottom" :title="csdn">&#xe600;</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottomotherthing',
  props: ['bottHeight'],
  data () {
    return {
      github: 'Github',
      weixin: '<img src="./static/img/weixin.png" width="150px" height="150px">',
      qq: '<img src="./static/img/qq.png" width="150px" height="150px">',
      weibo: '新浪微博',
      csdn: 'CSDN'
    }
  }
}
</script>
<style scoped>
.bottomcontent {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomcontent img {
  width: 100%;
  position: absolute;
  z-index: -1;
}
.midcontent {
  width: 480px;
  height: 380px;
}
.mytopborder {
  position: relative;
  left: 230px;
  width: 250px;
  height: 150px;
  border-top: 10px solid rgba(255, 116, 36, 0.808);
  border-right: 10px solid rgba(255, 116, 36, 0.808);
}
.mybottomborder {
  position: relative;
  top: 35%;
  width: 100%;
  height: 100px;
  border: 10px solid rgba(255, 116, 36, 0.808);
  border-top: none;
}
.content {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  color: black;
}
.myh2 {
  font-family: '隶书';
  padding-bottom: 5px;
  font-size: 35px;
}
.line {
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, rgba(255, 0, 0, 0.219), rgba(255, 0, 0, 0.705), red, rgba(255, 0, 0, 0.705), rgba(255, 0, 0, 0.219));
}
.myh4 {
  padding: 0 39px;
  padding-top: 15px;
  font-family: 'STxingkai';
  color: rgba(251, 255, 0, 0.795);
}
.myh1 {
  padding: 0;
  margin: 0;
  font-family: 'Chiller';
  font-size: 60px;
}
.myconnect {
  width: 110%;
  position: relative;
  right: 48px;
}
a {
  text-decoration: none;
  color: black;
}
.iconfont {
  margin-left: 50px;
  font-size: 40px;
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
</style>
