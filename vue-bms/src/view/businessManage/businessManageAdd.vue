<template>
  <div class="BMcontainer">
    <basic-form></basic-form>

  </div>
</template>

<script>
  import BasicForm from '@/components/form/element-ui-basic-form';
  export default {
    data(){
      return {
        msg:"this is a business manange project"
      }
    },
    components:{
     BasicForm
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
