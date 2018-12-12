<template>
  <div>
    <el-form ref="userForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="userForm">
      <el-form-item label="登录名" prop="loginName">
        <el-input v-model="userForm.loginName" :disabled="userNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="userForm.realName"></el-input>
      </el-form-item>
      <el-form-item label="所属部门" prop="deptId" v-show="allDept.length>0">
        <el-select v-model="userForm.deptId" placeholder="请选择所属部门" style="width: 100%;">
          <el-option v-for="item,index in allDept" :key="index" :label="item.deptName" :value="item.deptId">

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="userForm.description"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="roleId">
        <el-radio-group v-model="userForm.roleId" @change="selectRole">
          <el-radio
            v-for="item,index in allRole"
            :key="index"
            :label="item.roleId"
           >
            {{item.roleName}}
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveUserInfo('userForm')" v-show="saveBtnShow">保存</el-button>
    <el-button type="success" @click="resetUserInfo('userForm')" v-show="resetBtnShow">重置</el-button>
  </div>


</template>

<script>
  import { Dept } from '../../api/api'
  import { Role } from '../../api/api'

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
        allDept:[],
        allRole:[],
        userForm:{
          loginName:'',
          realName:'',
          deptId:'',
          description:'',
          roleId:''
        },
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
      //拿到所有部门
      this.getAllDeptInfo()
      //拿到所有角色
      this.getAllRoleInfo();
      this.$nextTick(()=>{
        this.init();

      })
    },
    mounted(){
      setTimeout(()=>{
        this.init();
      },1000)
    },
    methods:{
      init(){
        console.log('init');
        console.log(this.allDept);
        console.log(this.userInfo);
        //console.log(this.userForm.roleId);

        if(this.userInfo){
          this.userForm.loginName=this.userInfo.loginName;
          this.userForm.realName=this.userInfo.realName;
          this.userForm.deptId=this.userInfo.deptId;
          this.userForm.description=this.userInfo.description;
          let roleInfos=this.userInfo.RoleList;
          //console.log(roleInfos);

          let roleId='';
          for(var i=0;i<roleInfos.length;i++){
            let roleInfo=roleInfos[i];
            if(roleInfo.userHasRole){
              roleId=roleInfo.roleId;
            }
          }
          //console.log(roleId+'roleId');
          this.userForm.roleId=roleId;
        }
      },
      //拿到所有角色
      getAllRoleInfo(){
        Role.getAllRoleInfo().then((res)=>{
          let data=res.data;
          this.allRole=data.data;
          console.log('this.allRole');
          console.log(this.allRole)
        })
      },
      //拿到所有部门
      getAllDeptInfo(){
        Dept.getAllDeptInfo().then((res)=>{
          let data=res.data;
          this.allDept=data.data;
          console.log('this.allDept');
          console.log(this.allDept)
        })
      },
      //保存用户信息
      saveUserInfo(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("saveUserInfo",this.userForm);
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
      },
      //清除验证
      clearValidate(formName){
        this.$refs[formName].clearValidate();
      },
      //角色选择事件
      selectRole(val){
        console.log(val);
      }
    },
    watch:{
      userInfo(oldVal,newVal){
        this.$nextTick(()=>{
          this.init();
        })
      },
      allDept(oldVal,newVal){
        console.log('allDeptChange');
        console.log(oldVal,newVal)

      }
    }
  }
</script>

<style>

</style>
