<template>
  <div>
    <el-form ref="privilegeForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="privilegeInfo">
      <el-form-item label="权限名称" prop="privilegeName">
        <el-input v-model="privilegeInfo.privilegeName" :disabled="privilegeNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="权限菜单" prop="privilegeMenu">
        <el-input v-model="privilegeInfo.privilegeMenu"></el-input>
      </el-form-item>
      <el-form-item label="菜单标识" prop="menuSn">
        <el-input v-model="privilegeInfo.menuSn"></el-input>
      </el-form-item>
      <el-form-item label="权限值" prop="privilegeValue">
        <el-input v-model="privilegeInfo.privilegeValue"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="privilegeInfo.status" placeholder="请选择" style="width: 100%;">
          <el-option label="已启用"  value="1"></el-option>
          <el-option label="已禁用" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="权限描述" prop="privilegeDescribe">
        <el-input type="textarea" v-model="privilegeInfo.privilegeDescribe"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="savePrivilegeInfo('privilegeForm')" v-show="saveBtnShow">保存</el-button>
    <el-button type="success" @click="resetPrivilegeInfo('privilegeForm')" v-show="resetBtnShow">重置</el-button>
  </div>


</template>

<script>
  export default {
    props:{
      privilegeInfo:{
        type:Object,
        default:{}
      },
      privilegeNameDisabled:{
        type:Boolean,
        default:true
      },
      saveBtnShow:{
        type:Boolean,
        default:true
      },
      resetBtnShow:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        labelPosition:"right",
        validate:false,
        rules:{
          privilegeName:[
            {
              required: true, //是否必填
              message: '登录名不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ],
          privilegeMenu:[
            {
              required: true, //是否必填
              message: '权限菜单不能为空', //规则
              trigger: 'blur'  //何事件触发
            }

          ],
          description:[
            {
              required: true, //是否必填
              message: '描述不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ]
        }
      }
    },
    methods:{
      //保存用户信息
      savePrivilegeInfo(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("savePrivilegeInfo")
        }
      },
      //重置用户信息
      resetPrivilegeInfo(formName){
        this.resetForm(formName)
        this.$emit("resetPrivilegeInfo")
      },
      //表单验证
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.validate=true;
          } else {
            console.log('error submit!!');
            this.validate=false;
          }
        });
      },
      //表单重置
      resetForm(formName) {
        this.$refs[formName].resetFields();

      }
    }
  }
</script>

<style>

</style>
