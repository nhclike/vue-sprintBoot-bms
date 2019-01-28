<template>
  <div class="top">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="chart-item-wrapper">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>预估总商机金额</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>￥2,845,350</h3>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart-item-wrapper">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>合同总金额</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>46</h3>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart-item-wrapper">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>商机个数转化率</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>17</h3>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart-item-wrapper">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>商机金额转化率</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>45%</h3>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "top-statistics"
    }
</script>

<style scoped lang="less">
  @import "./../../less/statistics/statistics";

  .top{
    .el-row{
      margin-bottom: 20px;
      .el-col{
        .chart-item-wrapper{
          padding: 10px 20px;
          background: #fff;
          height: @top_chart_item_height;
          div.chart-item{
            width: 100%;
            height: 100%;
            position: relative;
            top:0;
            left: 0;
            .chart_list_header{
              height: @bottom_chart_title_height;
              line-height:  @bottom_chart_title_height;
              corlor:#999;
              font-size:16px;
              text-align: left;
              p{
                opacity: 0.6;
              }
            }
            .chart_list_body{
              position: absolute;
              top:@bottom_chart_title_height;
              bottom: @bottom_chart_title_height;
              width: 100%;
              left: 0;
              display: flex;
              flex-direction: column;
              .list_body_num{
                flex: 0 0 30px;
                height: 30px;
                text-align: left;

              }
              .chart_list_body-wrapper{
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
</style>
