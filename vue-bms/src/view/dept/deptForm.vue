<template>
	<div>
    <el-form :label-position="labelPosition" label-width="80px" :model="deptInfo">
      <el-form-item label="部门编号">
        <el-input v-model="deptInfo.deptNo"></el-input>
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input v-model="deptInfo.deptName"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-input v-model="deptInfo.deptManager"></el-input>
      </el-form-item>
      <el-form-item label="部门类型">
        <el-input v-model="deptInfo.deptType"></el-input>
      </el-form-item>
      <el-form-item label="部门状态">
        <el-input  v-model="deptInfo.deptStatus"></el-input>
      </el-form-item>
    </el-form>
	</div>
</template>

<script>
  export default {
    props:{
      deptInfo:{
        type:Object,
        default:{}
      }
    },
    data(){
      return {
        labelPosition:"right"
      }
    }
  }
</script>

<style>

</style>
