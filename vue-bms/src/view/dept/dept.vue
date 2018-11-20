<template>
  <div>
    <basic-table ref="bTable" @add="addDept" @delete="deleteDept" @edit="editDept"></basic-table>
    <i-dialog v-bind:mdShow="deptEditModal" title="编辑部门" @close="closeModal">
      <div slot="message">
        <dept-form :deptInfo="deptInfo"></dept-form>
      </div>
      <div slot="btnGroup">
        <el-button type="primary" @click="saveDeptInfo">保存</el-button>
        <el-button type="success" @click="resetDeptInfo">重置</el-button>
      </div>
    </i-dialog>
    <i-dialog v-bind:mdShow="deptAddModal" title="新增部门" @close="closeModal">
      <div slot="message">
        <dept-form :deptInfo="deptInfo"></dept-form>
      </div>
      <div slot="btnGroup">
        <el-button type="primary" @click="saveDeptInfo">保存</el-button>
        <el-button type="success" @click="resetDeptInfo">重置</el-button>
      </div>
    </i-dialog>
  </div>
</template>

<script>
  import { Dept } from '../../api/api'
  import BasicTable from  '@/components/table/element-ui-basic-table';
  import iDialog from '@/components/modal/element-ui-dialog'
  import DeptForm from '@/view/dept/deptForm'
  export default {
    data(){
      return {
        deptEditModal:false,
        deptAddModal:false,
        deptInfo:{}
      }
    },
    components:{
      BasicTable,
      iDialog,
      DeptForm
    },
    methods:{
      addDept(){
        this.deptInfo={};
        this.deptAddModal=true;
      },
      editDept(param){
        //console.log(param);
        this.deptEditModal=true;

        this.getDeptInfo({"id":param.deptId});

      },
      deleteDept(param){
        //console.log(param);
        this.$refs.bTable.deleteDeptInfo({"id":param.deptId});
        this.$refs.bTable.getData();
      },
      //根据用户id拿到用户信息
      getDeptInfo(param){
        Dept.getDeptInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            this.deptInfo=data.data;
            console.log(this.deptInfo);
          }
        })
      },
      closeModal(){
        this.deptEditModal=false;
        this.deptAddModal=false;

      },
      //保存用户信息
      saveDeptInfo(){
        //向数据库加入数据
        this.$refs.bTable.updateUserInfo(this.deptInfo);
        //关闭modal
        this.closeModal();
        //刷新table
        this.$refs.bTable.getData();

      },
      //重置用户信息
      resetDeptInfo(){
        this.deptInfo={}
      },
    }
  }
</script>

<style>

</style>
