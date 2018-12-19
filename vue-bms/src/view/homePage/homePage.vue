<template>
	<div>
    <!--<i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">个人统计</el-breadcrumb-item>

      </div>
    </i-breadcrumb>-->
    <div class="indexContainer">
      <div class="contextContainer">
        <el-row :gutter="20">
          <el-col :span="16">
            <i-card title="公告" operateBtn="新增公告" @operateBtnClick="operateBtnClick">
              <div slot="cardContext" >
                <div :style="{height:carBodyHeight+'px'}">
                  <scroll :data="proclamations" class="Scroll" ref="proScroll">
                    <div>
                      <el-row :gutter="12">
                        <el-col :span="24" style="margin-bottom: 10px" v-for="item in proclamations">
                          <i-card-footer :proclamation="item"></i-card-footer>
                        </el-col>
                      </el-row>
                    </div>
                  </scroll>
                </div>
              </div>
            </i-card>
          </el-col>
          <el-col :span="8">
            <i-card title="通知" >
              <div slot="cardContext">
                <div>
                  <el-table
                    :data="tableData"
                    style="width: 100%"
                    :height="carBodyHeight"
                    :default-sort = "{prop: 'date', order: 'descending'}"
                    ref="msgTable"
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
              </div>
            </i-card>
          </el-col>
        </el-row>
      </div>
      <i-dialog v-bind:mdShow="proclamationsModal"
                title="公告新增"
                width="20%"
                @close="proclamationsModalHide"
                customClass="proclamationsModal"
      >
        <div slot="message">
          <div>
            <proclamation-form :proclamationInfo="null">

            </proclamation-form>
          </div>
        </div>
      </i-dialog>
    </div>
	</div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import iCard from '@/components/panel/element-ui-card'
  import iCardFooter from '@/components/panel/element-ui-card-footer'
  import Scroll from '@/components/scroll/scroll'
  import iDialog from '@/components/modal/element-ui-dialog'
  import proclamationForm from '@/view/homePage/proclamationForm'
  export default {
    data(){
      return {
        tableData: [],//通知表格数据
        proclamations:[], //公告数据
        proclamationsModal:false,
      }
    },
    components:{
      iBreadcrumb,
      iCard,
      iCardFooter,
      Scroll,
      iDialog,
      proclamationForm
    },
    computed:{
      carBodyHeight(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
       return  Number(h-200)
      },
    },
    created(){
      console.log('created');
      this.getProList();
      this.getTableList();
    },
    mounted(){
      console.log('mounted');
      this.refreshScroll();
    },
    methods:{
      //get公告数据
      getProList(){
        this.proclamations=[
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
          {
            title:'本周报销单审批问题反馈',
            text:'本周报销单审批问题反馈：1、电子和纸质报销单据不同步，有的间隔时间比较长！2、系统集成部的个别同事差旅费报销单未按项目分开报销，导致单据多而乱，延长审批时间。3、销售个别同事差旅费中住宿费和车票行程不一致；招待费发票与审批内容不一致。',
            time:'2018/11/21 11:30:06'
          },
        ];
      },
      //get通知table数据
      getTableList(){
        this.tableData=[
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
        ];
      },
      //新增公告被点击
      operateBtnClick(){
        //alert("operateBtnClick");
        this.proclamationsModalShow();
      },
      //新增公告显示
      proclamationsModalShow(){
        this.proclamationsModal=true;
      },
      //新增公告隐藏
      proclamationsModalHide(){
        this.proclamationsModal=false;
      },
      //刷新滚动条
      refreshScroll(){
        setTimeout(()=>{
          if(this.proclamations.length>0){
            this.$refs.proScroll.refresh();
          }
          /*if(this.tableData.length>0){
            this.$refs.tableList.refresh();

          }*/
        },20)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable.less";


  .tableList{
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .el-dialog__wrapper{
    z-index: 9999;
  }
</style>
