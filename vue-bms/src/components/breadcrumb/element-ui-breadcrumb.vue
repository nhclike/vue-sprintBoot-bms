<template>
	<div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <slot name="breadcrumb"></slot>
      </el-breadcrumb>
    </div>
	</div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable.less";
.crumbs {
  height:@breadcrumb_height;
  background: @breadcrumb_bg;
  line-height: @breadcrumb_font_size;
  width: 100%;
  margin-top:5px;
  .el-breadcrumb{
    height: 100%;
    line-height: 100%;
    padding-left: 30px;
  }
}
</style>
