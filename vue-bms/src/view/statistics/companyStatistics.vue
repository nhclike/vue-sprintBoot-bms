<template>
	<div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">公司统计</el-breadcrumb-item>

      </div>
    </i-breadcrumb>
    <div class="statisticsContainer">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>预估总商机金额</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>￥2,845,350</h3>
              </div>
              <div id = "total_business_opportunity">
                <p class = "week_rate">周同比<img alt="" src=""><span class = "week_rate_down">11%</span></p>
                <p class = "date_rate">日环比<img alt="" src=""><span class = "date_rate_up">12%</span></p>
              </div>
            </div>
            <div class = "chart_list_footer">
              <p>预估月均商机金额<span>￥13,264</span></p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>已完成任务</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>46</h3>
              </div>
              <div id = "finished_task"></div>
            </div>
            <div class = "chart_list_footer">
              <p>日完成任务<span>2</span></p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>未完成任务</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>17</h3>
              </div>
              <div id = "unfinished_task_chart" >
                <u-bar></u-bar>
              </div>
            </div>
            <div class = "chart_list_footer">
              <p>平均完成率<span>50%</span></p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart-item">
            <div class = "chart_list_header">
              <p>商机转化率</p>
            </div>
            <div class = "chart_list_body">
              <div class = "list_body_num">
                <h3>45%</h3>
              </div>
              <div id = "business_rate">
                <p>
                  <span></span>
                </p>
              </div>
            </div>
            <div class = "chart_list_footer">
              <p>周同比<span>￥13,264</span></p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="18">
          <t-bar></t-bar>

        </el-col>
        <el-col :span="6">

        </el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import tBar  from '@/view/statistics/trendBar'
  import uBar  from '@/view/statistics/unfinishedTaskBar'

  export default {
    data(){
      return {}
    },
    components:{
      iBreadcrumb,
      tBar,
      uBar
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable";
.statisticsContainer{
  position: fixed;
  top:@top_height+@breadcrumb_height;
  bottom: 0;
  left: @left_width;
  right: 0;
  padding:20px;
  .el-row{
    margin-bottom: 20px;
    .el-col{
      div.chart-item{
        background: #fff;
        height: 240px;
        .chart_list_header{
          height:40px;
          line-height: 40px;
          corlor:#999;
          font-size:16px;
          p{
            opacity: 0.6;
          }
        }
        .chart_list_body{
          height:160px;
          .list_body_num{
            height: 30px;
          }
          #unfinished_task_chart{
            height: 130px;
          }
          #total_business_opportunity{
            height: 130px;
            display: flex;
            justify-items: center;
            align-content: center;
            p{
              display: inline-flex;
            }
          }
        }
        .chart_list_footer{
          height: 40px;
          line-height: 40px;
          p{
            opacity: 0.8;
            span{
              color:#000;
              font-weight:600;
              opacity: 1;
              margin-left:10px;
            }
          }
        }
      }

    }
  }
}
</style>
