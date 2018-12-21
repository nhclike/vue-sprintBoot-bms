<template>
  <el-card shadow="always" :body-style="bodyStyle">
    <div class="cardBody" style="padding: 20px">
      <div class="header">
        <h4>{{proclamation.proclamationName}}</h4>
        <div class="operateBtn">
          <el-button type="primary" plain>编辑</el-button>
          <el-button type="primary" plain>删除</el-button>

        </div>
      </div>
      <div  class="text">
        {{proclamation.proclamationContent}}
      </div>
      <div>
        <span style="float: right">{{proclamation.proclamationDate}}</span>
      </div>
    </div>
  </el-card>
</template>


<script>

  export default{
    props:{
      proclamation:{
        type:Object,
        default:{
          proclamationName:'',
          proclamationContent:'',
          proclamationDate:''
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
  @header_height:40px;
  .cardBody{
    .header{
      display: flex;
      height: @header_height;
      .operateBtn{
        flex: 0 0 180px;
        height: 100%;
      }
      H4{
        text-align: left;
        padding-left: 5px;
        color: #000;
        flex: 1;
      }
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



</style>
