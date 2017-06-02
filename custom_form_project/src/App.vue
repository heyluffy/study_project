<template>
  <div id="app">
    <div class="page-top">
      <h2 class="page-title">OA-ElementUI</h2>
      <div class="user-menu"></div>
    </div>
    <div class="page-menu">
      <div class="page-menu-list clr">
        <a href="javascript:;" class="page-menu-item checked">自定义表单</a>
        <a href="javascript:;" class="page-menu-item">选项2</a>
        <a href="javascript:;" class="page-menu-item">选项3</a>
        <a href="javascript:;" class="page-menu-item">选项4</a>
        <a href="javascript:;" class="page-menu-item">选项5</a>
      </div>
    </div>
    <div class="page-con">
      <custom-form></custom-form>
    </div>
  </div>
</template>
<script>
import CustomForm from './components/page/customForm';
export default {
  name: 'app',
  components: {CustomForm}
}
</script>
<style>
.page-top{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 66px;
  background: #334862;
}
.page-menu{
  position: absolute;
  left: 0px;
  top: 66px;
  bottom: 0px;
  width: 150px;
  overflow: auto;
  background: rgb(232, 235, 239);
}
.page-menu-item{
  display: block;
  width: 100%;
  height: 30px;
  padding: 0 10px 0px 20px;
  margin-top: 20px;
  line-height: 30px;
  color: #354B66;
}
.page-menu-item.checked{
  color: #fff;
  background-color: rgb(75, 96, 120);
}
.page-con{
  position: absolute;
  top:66px;
  left: 150px;
  right: 0px;
  bottom: 0px;
  background: green;
}

</style>
