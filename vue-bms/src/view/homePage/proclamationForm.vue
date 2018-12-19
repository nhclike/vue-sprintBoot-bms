<template>
  <div>
    <el-form ref="proclamationForm"
             :rules="rules"
             :label-position="labelPosition"
             label-width="80px"
             :model="proclamationForm"
    >
      <el-form-item label="公告标题" prop="proclamationName">
        <el-input v-model="proclamationForm.proclamationName" ></el-input>
      </el-form-item>
      <el-form-item label="公告内容" prop="proclamationContent">
        <el-input type="textarea" v-model="proclamationForm.proclamationContent"></el-input>
      </el-form-item>
      <p-upload></p-upload>

      <el-button type="primary" @click="saveProclamationInfo('proclamationForm')" v-show="saveBtnShow">确认</el-button>
      <el-button type="success" @click="resetProclamationInfo('proclamationForm')" v-show="resetBtnShow">重置</el-button>
    </el-form>
  </div>
</template>

<script>
  import pUpload from "@/components/upload/plupload"
  export default {
        props:{
          proclamationInfo:{
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
        components:{
          pUpload
        },
        data(){
            return{
              proclamationForm:{
                proclamationName:'',
                proclamationContent:''
              },
              labelPosition:"right",
              validate:false,
              rules:{
                proclamationName:[
                  {
                    required: true, //是否必填
                    message: '公告名称不能为空', //规则
                    trigger: 'blur'  //何事件触发
                  }
                ],
                proclamationContent:[
                  {
                    required: true, //是否必填
                    message: '公告内容不能为空', //规则
                    trigger: 'blur'  //何事件触发
                  }
                ]
              }
            }
        },
        methods:{

          //保存公告信息
          saveProclamationInfo(formName){
            this.submitForm(formName);
            if(this.validate){  //验证通过
              this.$emit("saveProclamationInfo")
            }
          },
          //重置公告信息
          resetProclamationInfo(formName){
            this.resetForm(formName)
            this.$emit("resetProclamationInfo")
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

<style scoped>

</style>
