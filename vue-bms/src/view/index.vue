<template>
	<div>
    <Header></Header>
    <div class="content">
      <div class="left">
        <left-menu></left-menu>
      </div>
      <div class="right">
        <router-view/>

      </div>
    </div>
	</div>
</template>

<script>
  import Header from '@/components/header/header'
  import LeftMenu from '@/components/menu/left-menu'
  export default {
    data(){
      return {}
    },
    components:{
      Header,
      LeftMenu
    }
  }
</script>

<style scoped lang="less">
@import "./../less/comm/variable.less";
  .content{
    position: fixed;
    top:50px;
    bottom: 0;
    right: 0;
    left: 0;
    .left{
      float: left;
      height: 100%;
      width: 250px;
    }
    .right{
      position: fixed;
      top:50px;
      bottom: 0;
      left: 250px;
      right: 0;
      background-color: #ddd;
    }
  }
</style>
