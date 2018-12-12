<template>
  <div>
    <el-form ref="roleForm" :rules="rules" :label-position="labelPosition" label-width="80px" :model="roleForm">
      <el-form-item label="角色" prop="roleName">
        <el-input v-model="roleForm.roleName" :disabled="roleNameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="角色标识" prop="roleSn">
        <el-input v-model="roleForm.roleSn"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="roleForm.status" placeholder="请选择" style="width: 100%;">
          <el-option label="已启用"  value="1"></el-option>
          <el-option label="已禁用" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="权限" prop="permissionId">
        <el-checkbox-group v-model="roleForm.permissionId">
          <el-checkbox :label="item.id" name="permissionId" v-for="item,index in allPrivilege">
            {{item.privilegeName}}
          </el-checkbox>
         <!-- <el-checkbox label="地推活动" name="privilegeId"></el-checkbox>
          <el-checkbox label="线下主题活动" name="privilegeId"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="privilegeId"></el-checkbox>-->
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="addRole('roleForm')" v-show="addBtnShow">新增</el-button>
    <el-button type="primary" @click="saveRoleInfo('roleForm')" v-show="saveBtnShow">保存修改</el-button>
    <el-button type="success" @click="resetRoleInfo('roleForm')" v-show="resetBtnShow">重置</el-button>
  </div>


</template>

<script>
  //权限接口
  import { Privilege } from '../../api/api'
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
      addBtnShow:{
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
        roleForm:{
          roleId:'',
          roleName:'',
          roleSn:'',
          status:'',
          permissionId:[]
        },
        allPrivilege:[],
        rules:{
          roleName:[
            {
              required: true, //是否必填
              message: '角色名不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ],
          roleSn:[
            {
              required: true, //是否必填
              message: '角色标识不能为空', //规则
              trigger: 'blur'  //何事件触发
            }

          ]
        }
      }
    },
    created(){
      //拿到所有权限
      this.getAllPrivilegeInfo();
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
        if(this.roleInfo){
          console.log('init this.roleInfo');
          console.log(this.roleInfo);
          this.roleForm.roleId=this.roleInfo.roleId;
          this.roleForm.roleName=this.roleInfo.roleName;
          this.roleForm.roleSn=this.roleInfo.roleSn;
          this.roleForm.status=this.roleInfo.status.toString();
          let privilegeInfos=this.roleInfo.privilegeList;
          //console.log(roleInfos);

          let privilegeIds=[];
          for(var i=0;i<privilegeInfos.length;i++){
            let privilegeInfo=privilegeInfos[i];
            if(privilegeInfo.roleHasPrivilege){
              privilegeIds.push(privilegeInfo.id);
            }
          }
          console.log('privilegeIds');
          console.log(privilegeIds);
          this.roleForm.permissionId=privilegeIds;
        }
      },
      //拿到所有权限
      getAllPrivilegeInfo(){
        Privilege.getAllPrivilegeInfo().then((res)=>{
          let data=res.data;
          this.allPrivilege=data.data;
          console.log('this.allPrivilege');
          console.log(this.allPrivilege)
        })
      },
      //新增用户
      addRole(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("addRole",this.roleForm)
        }
      },
      //保存角色信息
      saveRoleInfo(formName){
        this.submitForm(formName);
        if(this.validate){  //验证通过
          this.$emit("saveRoleInfo",this.roleForm)
        }
      },
      //重置角色信息
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
    },
    watch:{
      roleInfo(oldVal,newVal){
        this.$nextTick(()=>{
          this.init();
        })
      }
    }
  }
</script>

<style>

</style>
