<template>
  <el-card shadow="always" :body-style="bodyStyle">
    <div class="cardBody" style="padding: 20px">
      <h4>{{proclamation.title}}</h4>
      <div  class="text">
        {{proclamation.text}}
      </div>
      <div>
        <span style="float: right">{{proclamation.time}}</span>
      </div>
    </div>
    <div class="footer">
      <span class="footer-btn">
        编辑
      </span>
      <span  class="footer-btn">
        删除
      </span>
    </div>
  </el-card>
</template>


<script>

  export default{
    props:{
      proclamation:{
        type:Object,
        default:{
          title:'',
          text:'',
          time:''
        }
      }
    },
    data(){
      return {
        bodyStyle:{
          padding:'0px'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import "./../../less/comm/variable.less";
  @footer_height:40px;
  .cardBody{
    H4{
      text-align: left;
      padding-left: 5px;
      color: #000;
    }
    .text{
      margin: 15px 0;
      font-size:@text_font_size_sm;
      overflow:hidden;

      text-overflow:ellipsis;

      display:-webkit-box;

      -webkit-box-orient:vertical;

      -webkit-line-clamp:2;
    }
  }

  .footer{
    height: @footer_height;
    line-height:@footer_height;
    background:#F7F9FA;
    .footer-btn{
      width: 50%;
      display: flex;
      float: left;
      align-items: center;
      justify-content: center;
      height: @footer_height;
      padding:0;
      margin:0;
      border: 1px solid #ddd;
      font-size: @text_font_size_sm;
    }
  }

</style>
