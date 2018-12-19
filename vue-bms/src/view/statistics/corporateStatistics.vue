<template>
	<div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">公司统计</el-breadcrumb-item>
      </div>
    </i-breadcrumb>
    <div class="statisticsContainer">
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
                <div class = "chart_list_footer">
                  <p>预估月均商机金额<span>￥13,264</span></p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="chart-item-wrapper">
              <div class="chart-item">
                <div class = "chart_list_header">
                  <p>已完成任务</p>
                </div>
                <div class = "chart_list_body">
                  <div class = "list_body_num">
                    <h3>46</h3>
                  </div>
                  <div class="chart_list_body-wrapper">
                    <div id = "finished_task"></div>
                  </div>

                </div>
                <div class = "chart_list_footer">
                  <p>日完成任务<span>2</span></p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="chart-item-wrapper">
              <div class="chart-item">
                <div class = "chart_list_header">
                  <p>未完成任务</p>
                </div>
                <div class = "chart_list_body">
                  <div class = "list_body_num">
                    <h3>17</h3>
                  </div>
                  <div class="chart_list_body-wrapper">
                    <div id = "unfinished_task_chart" >
                      <u-bar></u-bar>
                    </div>
                  </div>
                </div>
                <div class = "chart_list_footer">
                  <p>平均完成率<span>50%</span></p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="chart-item-wrapper">
              <div class="chart-item">
                <div class = "chart_list_header">
                  <p>商机转化率</p>
                </div>
                <div class = "chart_list_body">
                  <div class = "list_body_num">
                    <h3>45%</h3>
                  </div>
                  <div class="chart_list_body-wrapper">
                    <div id = "business_rate">
                      <p>
                        <span></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class = "chart_list_footer">
                  <p>周同比<span>￥13,264</span></p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom">
        <div class="bottom-wrapper">
          <div class="chart-header">
            <h4 class="title">商机个数/金</h4>
            <div class="month">
              <span>季度</span>
              <span>全年</span>
            </div>
            <div class="time">
              <date-picker-range></date-picker-range>
            </div>
          </div>
          <div class="chart-wrapper">
            <el-row :gutter="20">
              <el-col :span="18">
                <div class="sjBar">
                  <div class="sjBar-wrapper">
                    <t-bar></t-bar>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="business-ranking-wrapper">
                  <div class = "business_ranking">
                    <h4>商机金额排名</h4>
                  </div>
                  <div class = "business_ranking_list">
                    <ul>
                      <li>
                        <span class = "rank_num"><img alt="" src="/resources/images/rank_first.png"></span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>
                      <li>
                        <span class = "rank_num"><img alt="" src="/resources/images/rank_second.png"></span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>
                      <li>
                        <span class = "rank_num"><img alt="" src="/resources/images/rank_third.png"></span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>
                      <li>
                        <span class = "rank_num">4</span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>
                      <li>
                        <span class = "rank_num">5</span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>
                      <li>
                        <span class = "rank_num">6</span>
                        <span class = "business_name">沙漠绿化项目</span>
                        <span class = "business_rice">8,200,000</span>
                      </li>

                    </ul>
                  </div>
                </div>

              </el-col>
            </el-row>
          </div>
        </div>


      </div>


    </div>
	</div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import tBar  from '@/view/statistics/trendBar'
  import uBar  from '@/view/statistics/unfinishedTaskBar'
  import DatePickerRange from '@/components/timePicker/element-ui-date-picker-range'

  export default {
    data(){
      return {

      }
    },
    components:{
      iBreadcrumb,
      tBar,
      uBar,
      DatePickerRange
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable";

.statisticsContainer{
  @top_chart_item_height:240px;
  @bottom_chart_title_height:40px;
  position: fixed;
  top:@top_height+@breadcrumb_height;
  bottom: 0;
  left: @left_width;
  right: 0;
  padding:20px;
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
            .chart_list_footer{
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              border-top: 1px solid #ddd;
              height:  @bottom_chart_title_height;
              line-height:  @bottom_chart_title_height;
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
  }
  .bottom{
    position: absolute;
    top:280px;
    bottom:20px;
    left: 20px;
    right: 20px;
    background: #fff;
    .bottom-wrapper{
      height: 100%;
      width: 100%;

      .chart-header{
        height: @bottom_chart_title_height;
        line-height: @bottom_chart_title_height ;
        display: flex;
        align-items: center;
        .title{
          flex: 1;
          text-align: left;
          padding-left: 20px;
        }
        .month{
          flex: 0 0 80px;
          width: 80px;
        }
        .time{
          flex: 0 0 260px;
          width: 260px;
        }
      }
      .chart-wrapper{
        position: absolute;
        top:@bottom_chart_title_height;
        bottom: 0;
        left: 0;
        width: 100%;
        .el-row{
          height: 100%;
          .el-col{
            height: 100%;
            .sjBar{
              width:100%;
              height: 100%;
              padding: 20px;
              .sjBar-wrapper{
                height: 100%;
                width: 100%;
              }
            }
            .business-ranking-wrapper{
              width:100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              .business_ranking{
                flex: 0 0 40px;
                height: 40px;
                h4{
                  height: 40px;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 40px;
                }
              }
              .business_ranking_list{
                flex: 1;
                border: 1px solid #000;
                overflow:auto;
                ul{
                  li{
                    height: 40px;
                    line-height: 40px;
                    color: #333;
                    .business_rice{
                      float:right;
                      margin-right:30px;
                    }
                    .rank_num{
                      display: inline-block;
                      height: 20px;
                      width: 20px;
                      background: #f0f2f5;
                      border-radius: 20px;
                      text-align: center;
                      line-height: 20px;
                      margin-right:15px;
                    }

                  }
                }
              }
            }


          }
        }
      }
    }

  }

}
</style>
