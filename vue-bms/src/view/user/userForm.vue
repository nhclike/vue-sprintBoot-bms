<template>
  <div>
    <el-form ref="userForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="userInfo">
      <el-form-item label="登录名" prop="loginName">
        <el-input v-model="userInfo.loginName" :disabled="userNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="userInfo.realName"></el-input>
      </el-form-item>
      <el-form-item label="所属部门" prop="deptId">
        <el-select v-model="userInfo.deptId" placeholder="请选择所属部门" style="width: 100%;">
          <el-option label="售前" value="1"></el-option>
          <el-option label="销售" value="2"></el-option>
          <el-option label="售后" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="userInfo.description"></el-input>
      </el-form-item>
      <slot name="roleListCheckbox">11111111111111</slot>
      <!--<el-form-item label="角色" >
        &lt;!&ndash;<el-checkbox-group v-model="userInfo.RoleList">
          <el-checkbox v-for="item,index in allRole" :key="index" :label="item.roleName"  name="RoleList"></el-checkbox>
        &lt;!&ndash;  <el-checkbox label="美食/餐厅线上活动" name="RoleList"></el-checkbox>
          <el-checkbox label="地推活动" name="RoleList"></el-checkbox>
          <el-checkbox label="线下主题活动" name="RoleList"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="RoleList"></el-checkbox>&ndash;&gt;
        </el-checkbox-group>&ndash;&gt;
      </el-form-item>-->
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
        default:{

        }
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
    created(){
      console.log('created');

    },
    mounted(){
      console.log('mounted');

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
