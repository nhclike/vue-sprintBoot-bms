<template>
	<div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">公司统计</el-breadcrumb-item>
      </div>
    </i-breadcrumb>
    <div class="statisticsContainer">
      <t-sta></t-sta>
      <div class="bottom">
        <div class="bottom-wrapper">
          <div class="chart-header">
            <h4 class="title">商机总数/商机成交总数</h4>
            <div class="month">
              <span>月</span>
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
                  <div class="business_ranking_list">
                    <r-list></r-list>
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
  import tSta  from '@/view/statistics/topStatistics'
  import rList  from '@/view/statistics/rankList'
  import DatePickerRange from '@/components/timePicker/element-ui-date-picker-range'

  export default {
    data(){
      return {

      }
    },
    components:{
      iBreadcrumb,
      tBar,
      DatePickerRange,
      tSta,
      rList
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/statistics/statistics";

</style>
