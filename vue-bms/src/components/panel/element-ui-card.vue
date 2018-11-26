<template>
  <el-card class="box-card" :style="{width: width }">
    <div slot="header" class="clearfix">
      <span class="title">{{title}}</span>
      <el-button style="float: right;padding: 0" type="text">{{operateBtn}}</el-button>
    </div>
    <div>
    <slot name="cardContext"></slot>
    </div>

  </el-card>
</template>


<script>

  export default{
    props:{
      title:{
        type:String,
        default:''
      },
      operateBtn:{
        type:String,
        default:''
      },
      width:{
        type:String,
        default:'100%'
      }
    }
  }
</script>
<style>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }


  .title{
    float: left;
  }
</style>
