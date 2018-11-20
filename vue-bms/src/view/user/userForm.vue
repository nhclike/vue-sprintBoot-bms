<template>
	<div>
    <el-form :label-position="labelPosition" label-width="80px" :model="userInfo">
      <el-form-item label="登录名">
        <el-input v-model="userInfo.loginName"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="userInfo.realName"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="userInfo.description"></el-input>
      </el-form-item>
    </el-form>
	</div>
</template>

<script>
  export default {
    props:{
      userInfo:{
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
