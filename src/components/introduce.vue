<template>
  <div class="introcontent">
    <div class="bg2-img"><img src="../assets/bg1.jpg" :style="{height:introHeight}"></div>
    <div class="midcontent">
      <div class="card">
        <div class="card-body text-center animated flipInX">
          <h1 class="card-title"><img class="introimg" src="../assets/introimg.jpg"></h1>
          <h3 class="card-text">您好，我叫欧阳佳豪，坐标成都。 我是四川师范大学计算机科学与技术专业2016级大三的学生，有着一定的编程基础，
            目前能熟练运用<span style="text-decoration: underline;">HTML5、CSS、Javascript</span>等前端Web开发技术，
            熟悉<span style="text-decoration: underline;">bootstrap库、jquery库、Vue框架</span>等的基础，
            能基本使用webpack、npm、git等工具,对前端很感兴趣，具有良好的自学能力，目前的规划是先找一份实习工作磨砺自我，积累工作经验，学习更多前端相关知识，
            想要学习一些后端相关知识以更好的应对前端各种工作，努力的成为一名合格的前端工程师！</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'introduce',
  props: ['introHeight']
}
</script>
<style scoped>
.introcontent {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg2-img {
  position: absolute;
  display: block;
  width: 100%;
  z-index: -1;
}
.bg2-img img{
  width: 100%;
}
.midcontent {
  width: 60%;
}
.card {
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
}
.introimg {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(359deg);
  }
}
.introimg:hover {
  box-shadow: 0 0 16px rgb(255, 102, 0);
}
.card-text {
  font-family: 'STKaiti','Courier New', Courier, monospace;
  font-size: 22px;
  color: #ffffff;
}
</style>
