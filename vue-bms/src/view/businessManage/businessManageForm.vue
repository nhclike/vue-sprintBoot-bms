<template>
  <div class="BMcontainer">
    <b-form ref="BMForm"
      @saveBMInfo="saveBMInfo"
    ></b-form>

  </div>
</template>

<script>
  import { BusinessManage } from '../../api/api'

  import BForm from '@/components/form/business-manage-form';
  export default {
    data(){
      return {
        msg:"this is a business manange project"
      }
    },
    components:{
      BForm
    },
    methods:{
      saveBMInfo(value){
        //商机数据提交
        this.submitForm(value);
        //返回商机列表
        this.$refs.BMForm.goBack()
      },
      //提交商机增加表单
      submitForm(params){
        BusinessManage.BMAdd(params).then((res)=>{
          console.log(res);
        })
      }
    }

  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable.less";
.BMcontainer{
  z-index: 1000;
  background: #ddd;
  position: fixed;
  top:@top_height;
  left:@left_width;
  bottom: 0;
  right: 0;
}
</style>
