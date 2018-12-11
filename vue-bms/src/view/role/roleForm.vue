<template>
  <div>
    <el-form ref="roleForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="roleInfo">
      <el-form-item label="角色" prop="roleName">
        <el-input v-model="roleInfo.roleName" :disabled="roleNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="角色标识" prop="roleSn">
        <el-input v-model="roleInfo.roleSn"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="roleInfo.status" placeholder="请选择" style="width: 100%;">
          <el-option label="已启用"  value="1"></el-option>
          <el-option label="已禁用" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveRoleInfo('roleForm')" v-show="saveBtnShow">保存</el-button>
    <el-button type="success" @click="resetRoleInfo('roleForm')" v-show="resetBtnShow">重置</el-button>
  </div>


</template>

<script>
  export default {
    props:{
      roleInfo:{
        type:Object,
        default:{}
      },

      roleNameDisabled:{
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
          loginName:[
            {
              required: true, //是否必填
              message: '登录名不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ],
          realName:[
            {
              required: true, //是否必填
              message: '真实姓名不能为空', //规则
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
      saveRoleInfo(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("saveRoleInfo")
        }
      },
      //重置用户信息
      resetRoleInfo(formName){
        this.resetForm(formName)
        this.$emit("resetRoleInfo")
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
