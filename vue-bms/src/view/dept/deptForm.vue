<template>
  <div>
    <el-form ref="deptForm" :rules="rules" :label-position="labelPosition" label-width="120px" :model="deptInfo">
      <el-form-item label="部门编号" prop="deptNo">
        <el-input v-model="deptInfo.deptNo"></el-input>
      </el-form-item>
      <el-form-item label="部门名称" prop="deptName">
        <el-input v-model="deptInfo.deptName"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人" prop="deptManager">
        <el-input v-model="deptInfo.deptManager"></el-input>
      </el-form-item>
      <el-form-item label="部门类型" prop="deptType">
        <el-select v-model="deptInfo.deptType" placeholder="请选择部门类型" style="width: 100%;">
          <el-option label="售前" value="1"></el-option>
          <el-option label="销售" value="2"></el-option>
          <el-option label="售后" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="部门状态" prop="deptStatus">
        <el-select  v-model="deptInfo.deptStatus" placeholder="请选择部门状态" style="width: 100%;">
          <el-option  value="1" label="启用"></el-option>
          <el-option  value="2" label="禁用"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="saveDeptInfo('deptForm')" v-show="saveBtnShow">保存</el-button>
    <el-button type="success" @click="resetDeptInfo('deptForm')" v-show="resetBtnShow">重置</el-button>
  </div>
</template>

<script>
  export default {
    props:{
      deptInfo:{
        type:Object,
        default:{}
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
    computed:{
    },
    data(){
      return {
        validate:false,
        labelPosition:"right",
        // 校验规则
        rules: {
          deptNo: [
            { required: true, //是否必填
              message: '部门编号不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ],
          deptName: [
            { required: true, //是否必填
              message: '部门名称不能为空', //规则
              trigger: 'blur'  //何事件触发
            },
            //可以设置双重验证标准
            { min: 3, max: 5,  message: '长度在 3 到 5 个字符', }
          ],
          deptManager: [
            { required: true, //是否必填
              message: '部门负责人不能为空', //规则
              trigger: 'blur'  //何事件触发
            }
          ],
          deptType: [
            { required: false, //是否必填
              message: '部门类型不能为空', //规则
              trigger: 'change'  //何事件触发
            }
          ],
          deptStatus: [
            { required: true, //是否必填
              message: '部门状态不能为空', //规则
              trigger: 'change'  //何事件触发
            }
          ],
        }
      }
    },
    methods:{
      //保存部门信息
      saveDeptInfo(formName){
        this.submitForm(formName);
        console.log(this.validate);
        if(this.validate){
          this.$emit("saveDeptInfo",this.validate)
        }
        else{
          console.log('表单验证不通过')
        }
      },
      //重置部门信息
      resetDeptInfo(formName){
        this.resetForm(formName);
        this.deptInfo={};
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
