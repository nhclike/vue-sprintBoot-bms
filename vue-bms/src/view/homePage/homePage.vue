<template>
	<div>
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
                          <i-card-proclamation :proclamation="item"></i-card-proclamation>
                        </el-col>
                      </el-row>
                    </div>
                  </scroll>
                </div>
              </div>
            </i-card>
          </el-col>
          <el-col :span="8">
            <i-card title="消息提醒" >
              <div slot="cardContext">
                <div>
                  <el-table
                    :data="tableData"
                    style="width: 100%"
                    :height="carBodyHeight"
                    :default-sort = "{prop: 'noticeDate', order: 'descending'}"
                    ref="msgTable"
                  >
                    <el-table-column
                      prop="noticeContent"
                      label="内容"
                      width="">
                    </el-table-column>
                    <el-table-column
                      prop="noticeDate"
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
      <!--发布公告modal-->
      <i-dialog v-bind:mdShow="proclamationsModal"
                title="公告新增"
                width="20%"
                @close="proclamationsModalHide"
                customClass="proclamationsModal"
      >
        <div slot="message">
          <div>
            <proclamation-form :proclamationInfo="null" @saveProclamationInfo="saveProclamationInfo">

            </proclamation-form>
          </div>
        </div>
      </i-dialog>
    </div>
	</div>
</template>

<script>
  //公告接口
  import { Proclamation } from '../../api/api'

  import { homePage } from '../../api/api'

  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import iCard from '@/components/panel/element-ui-card'
  import iCardProclamation from '@/components/panel/element-ui-card-proclamation'
  import Scroll from '@/components/scroll/scroll'
  import iDialog from '@/components/modal/element-ui-dialog'
  import proclamationForm from '@/view/homePage/proclamationForm'
  export default {
    data(){
      return {
        tableData: [],//通知表格数据
        proclamations:[], //公告数据
        proclamationsModal:false,
        proclamationFormInfo:{} //公告表单信息
      }
    },
    components:{
      iBreadcrumb,
      iCard,
      iCardProclamation,
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
      this.homePageGetAllProclamation();
      //this.getTableList();
      this.homePageGetAllNote();
    },
    mounted(){
      console.log('mounted');
      this.refreshScroll();
    },
    methods:{
      //get公告数据
      homePageGetAllProclamation(){
        homePage.HPGetAllProclamation().then((res)=>{
          //console.log(res);
          var data=res.data;
          this.proclamations=data;
        })
      },
      //get消息列表数据
      homePageGetAllNote(){
        homePage.HPGetAllNote().then((res)=>{

          var data=res.data;
          this.tableData=data;
          console.log(this.tableData);
        })
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
      //保存公告信息
      saveProclamationInfo(value){
        this.proclamationFormInfo=value;
        Proclamation.proclamationAddOrUpdate(this.proclamationFormInfo).then((res)=>{
          console.log(res);
        });
        //公告modal隐藏
        this.proclamationsModalHide();
        //公告列表刷新
        this.homePageGetAllProclamation();
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
