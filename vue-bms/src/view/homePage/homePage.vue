<template>
	<div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      </div>
    </i-breadcrumb>
    <div class="indexContainer">
      <el-row :gutter="20">
        <el-col :span="16">
          <i-card title="公告" operateBtn="更多">
            <div slot="cardContext" :style="{width:width+'px'}">
              <el-row :gutter="12">
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
                <el-col :span="12" style="margin-bottom: 10px">
                  <i-card-footer :proclamation="proclamation"></i-card-footer>
                </el-col>
              </el-row>
            </div>
          </i-card>
        </el-col>
        <el-col :span="8">
          <i-card title="通知" >
            <div slot="cardContext">
              <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
              >
                <el-table-column
                  prop="text"
                  label="内容"
                  width="">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="时间"
                  sortable
                  width="">
                </el-table-column>
              </el-table>
            </div>
          </i-card>
        </el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import iCard from '@/components/panel/element-ui-card'
  import iCardFooter from '@/components/panel/element-ui-card-footer'

  export default {
    data(){
      return {
        tableData: [
          {
            date: '2016-05-02 09:00:00',
            text: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04  09:00:00',
            text: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01  09:00:00',
            text: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03  09:00:00',
            text: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02 09:00:00',
            text: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04  09:00:00',
            text: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01  09:00:00',
            text: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03  09:00:00',
            text: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-02 09:00:00',
            text: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04  09:00:00',
            text: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01  09:00:00',
            text: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03  09:00:00',
            text: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        proclamation:{
          title:'本周报销单审批问题反馈',
          text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
          time:'2018/11/21 11:30:06'
        }
      }
    },
    components:{
      iBreadcrumb,
      iCard,
      iCardFooter
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable.less";
.indexContainer{
  position: fixed;
  top:@top_height+@breadcrumb_height;
  bottom: 0;
  left: @left_width;
  right: 0;
  padding:20px;
  .el-row{
    height: 100%;
  }
}
</style>
