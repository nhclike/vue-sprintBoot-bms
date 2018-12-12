<template>
  <div>
    <!--<i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">系统管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">权限管理</el-breadcrumb-item>

      </div>
    </i-breadcrumb>-->
    <div class="indexContainer">
      <div class="contextContainer">
        <div class="top">
          <el-button id="addBtn" type="primary" @click="addPrivilege">新增</el-button>
        </div>
        <div class="tableContainer">
          <i-table :list="list"
                   @handleSelectionChange="handleSelectionChange"
                   @handleSizeChange="handleSizeChange"
                   @handleCurrentChange="handleCurrentChange"
                   :options="options"
                   :columns="columns"
                   :operates="operates"
                   :total="total"
          >
          </i-table>
        </div>
      </div>
    </div>

    <i-dialog v-bind:mdShow="privilegeEditModal" width="500px"  title="权限编辑" v-on:close="closeModal">
      <div slot="message">
        <privilege-form ref="privilegeEditForm"
                        :privilegeInfo="privilegeInfo"
                        @savePrivilegeInfo="savePrivilegeInfo"
                        @resetPrivilegeInfo="resetPrivilegeInfo"
                        :resetBtnShow="false">

        </privilege-form>
      </div>
    </i-dialog>
    <i-dialog v-bind:mdShow="privilegeAddModal" title="权限新增" v-on:close="closeModal">
      <div slot="message">
        <privilege-form ref="privilegeAddForm"
                        :privilegeInfo="null"
                        @savePrivilegeInfo="savePrivilegeInfo"
                        @resetPrivilegeInfo="resetPrivilegeInfo"
                        :privilegeNameDisabled="addPrivilegeNameDisabled">

        </privilege-form>
      </div>
    </i-dialog>
  </div>
</template>

<script>
  //权限接口
  import { Privilege } from '../../api/api'
  import iTable from '@/components/table/comm-table'
  import iDialog from '@/components/modal/element-ui-dialog'
  import privilegeForm from '@/view/privilege/privilegeForm'
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'

  export default {
    components: {
      iTable,
      iDialog,
      privilegeForm,
      iBreadcrumb
    },
    data () {
      return {
        privilegeEditModal:false,
        privilegeAddModal:false,
        addPrivilegeNameDisabled:false,
        privilegeEditId:'',
        privilegeInfo:{},
        total:0,  //table总数
        pageSize:10,
        pageNum:1,
        list: [], // table数据
        options: {
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: false, // 是否支持列表项选中功能
        }, // table 的参数
        columns: [

          {
            prop: 'privilegeName',
            label: '权限名称',
            align: 'center',
          },
          {
            prop: 'privilegeSn',
            label: '权限标识',
            align: 'center',
          },
          {
            prop: 'status',
            label: '状态',
            align: 'center',
            formatter:function (row,column) {
              //console.log(row.status);
              if(row.status==='1'){
                return '<span>启用</span>'
              }
              else {
                return '<span>禁用</span>'
              }
            }
          }
        ], // 需要展示的列
        operates: {
          width: 200,
          fixed: 'right',
          list: [
            {
              id:'1',
              label: '编辑',
              type: 'warning',
              show: true,
              icon: 'el-icon-edit',
              plain: true,
              width:60,
              disabled: false,
              method: (index, row) => {
                this.handleEdit(index, row)
              }
            }
          ]
        } ,// 列操作按钮


      }
    },
    created(){
      this.getPrivilegeListDate();
    },
    methods: {
      //请求用户数据
      getPrivilegeListDate(){
        var param={
          pageSize:this.pageSize,
          pageNum:this.pageNum
        };
        Privilege.privilegeList(param).then((res)=>{
          this.list=res.data.rows;
          this.total=res.data.total;
        });
      },
      //更新用户数据
      updatePrivilegeInfo(param){
        Privilege.updatePrivilegeInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            console.log(data.msg);
          }
        })
      },
      //根据用户id拿到用户信息
      getPrivilegeInfo(param){
        Privilege.getPrivilegeInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            this.privilegeInfo=data.data;
            console.log(this.privilegeInfo);
            this.privilegeInfo.password='';
          }
        })
      },
      // 选中行
      handleSelectionChange (val) {
        //console.log('handleSelectionChange:', val)
      },
      //改变pageSize
      handleSizeChange(val){
        this.pageSize=val;
        this.getPrivilegeListDate();
      },
      //改变当前页
      handleCurrentChange(val){
        this.pageNum=val;
        this.getPrivilegeListDate();
      },
      // 编辑
      handleEdit (index, row) {
        //console.log(' index:', index)
        //console.log(' row:', row);
        this.privilegeEditModal=true;
        this.getPrivilegeInfo({"id":row.id})
      },
      //关闭modal
      closeModal(){
        this.privilegeEditModal=false;
        this.privilegeAddModal=false;
        this.$refs.privilegeAddForm.resetForm('privilegeForm');
        this.$refs.privilegeEditForm.resetForm('privilegeForm')

      },
      //保存用户信息
      savePrivilegeInfo(){
        //向数据库加入数据
        this.updatePrivilegeInfo(this.privilegeInfo);
        //关闭modal
        this.closeModal();
        //刷新table
        this.getPrivilegeListDate();

      },
      //重置用户信息
      resetPrivilegeInfo(){
        this.privilegeInfo={}
      },
      //新增用户
      addPrivilege(){
        this.privilegeAddModal=true;
        //用户信息置空
        this.privilegeInfo={};
      }
    }
  }
</script>

<style scoped lang="less">
  .top{
    position: relative;
    height:50px;
    #addBtn{
      position: absolute;
      top:5px;
      left:5px;
    }
  }
  .tableContainer{
    position: absolute;
    top:50px;
    bottom: 20px;
    width: 100%;
    left: 0;
  }

</style>
