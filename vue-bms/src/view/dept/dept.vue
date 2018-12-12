<template>
  <div>
    <div class="indexContainer">
      <div class="contextContainer">
        <basic-table ref="bTable" @add="addDept" @delete="deleteDept" @edit="editDept"></basic-table>

      </div>
    </div>
    <i-dialog v-bind:mdShow="deptEditModal" title="编辑部门" @close="closeModal"  >
      <div slot="message">
        <dept-form
          :deptInfo="deptInfo"
          @saveDeptInfo="saveDeptInfo"
          :resetBtnShow="false"
        >

        </dept-form>
      </div>
    </i-dialog>
    <i-dialog v-bind:mdShow="deptAddModal" title="新增部门" @close="closeModal" >
      <div slot="message">
        <dept-form
          :deptInfo="deptInfo"
          @saveDeptInfo="saveDeptInfo"
        >

        </dept-form>
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
      //增加部门
      addDept(){
        this.deptInfo={};
        this.deptAddModal=true;
      },
      //编辑部门
      editDept(param){
        //console.log(param);
        this.deptEditModal=true;
        this.getDeptInfo({"id":param.deptId});
      },
      //删除部门
      deleteDept(param){
        //console.log(param);
        this.$refs.bTable.deleteDeptInfo({"id":param.deptId});
        this.$refs.bTable.getData();
      },
      //根据用户id拿到部门信息
      getDeptInfo(param){
        Dept.getDeptInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            this.deptInfo=data.data;
            console.log(this.deptInfo);
          }
        })
      },
      //拿到所有部门
      getAllDeptInfo(){
        Dept.getAllDeptInfo().then((res)=>{
          let data=res.data;
          this.allDept=data.data;
          console.log('this.deptInfo');
          console.log(this.deptInfo)
        })
      },
      //关闭modal
      closeModal(){
        this.deptEditModal=false;
        this.deptAddModal=false;
      },
      //保存部门信息
      saveDeptInfo(valid){
        console.log(valid);
        if(valid){ //表单验证通过
          //向数据库加入数据
          this.$refs.bTable.updateDeptInfo(this.deptInfo);
          //关闭modal
          this.closeModal();
          //刷新table
          this.$refs.bTable.getData();
        }

      }
    }
  }
</script>

<style>

</style>
