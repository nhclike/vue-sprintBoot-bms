<template>
  <div>
    <el-form ref="userForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="userInfo">
      <el-form-item label="登录名" prop="loginName">
        <el-input v-model="userInfo.loginName" :disabled="userNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="userInfo.realName"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="userInfo.description"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveUserInfo('userForm')" v-show="saveBtnShow">保存</el-button>
    <el-button type="success" @click="resetUserInfo('userForm')" v-show="resetBtnShow">重置</el-button>
  </div>


</template>

<script>
  export default {
    props:{
      userInfo:{
        type:Object,
        default:{}
      },
      userNameDisabled:{
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
          password:[
            {
              required: true, //是否必填
              message: '登录密码不能为空', //规则
              trigger: 'blur'  //何事件触发
            },
            {
              min:6,
              max: 10,
              message: '长度在 6 到 10 个数字',
              trigger: 'blur'
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
      saveUserInfo(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("saveUserInfo")
        }
      },
      //重置用户信息
      resetUserInfo(formName){
        this.resetForm(formName)
        this.$emit("resetUserInfo")
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
