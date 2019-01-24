<template>
  <div class="bottomcontent">
    <div class="midcontent">
      <div class="mytopborder"></div>
      <div class="mybottomborder"></div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.bottomcontent {
  width: 100%;
  height: 100%;
  display: block;
  background: url('../assets/bg5.jpg');
  background-size: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.midcontent {
  position: relative;
  top: 25%;
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
</style>
