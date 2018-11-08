<template>
	<div>
    <Header></Header>
    <div class="content">
      <div class="left">
        <ele-menu></ele-menu>
      </div>
      <div class="right">


      </div>
    </div>
	</div>
</template>

<script>
  import Header from '@/components/header/header'
  import EleMenu from '@/components/menu/element-ui-menu'
  export default {
    data(){
      return {}
    },
    components:{
      Header,
      EleMenu
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
      width: 30%;
    }
    .right{
      float: left;
      width: 70%;
    }
  }
</style>
