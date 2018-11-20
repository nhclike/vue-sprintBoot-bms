<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="mdShow"
      width="30%"
      :before-close="handleClose"
      :modal="modal"
      :close-on-click-modal="closeOnClickModal"
      center
    >
      <slot name="message"></slot>
      <span slot="footer" class="dialog-footer">
        <slot name="btnGroup"></slot>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props:{
      mdShow:{
        type:Boolean,
        default:false
      },
      title:{
        type:String,
        default:"系统提示"
      },
      modal:{
        type:Boolean,
        default:false
      },
      closeOnClickModal:{
        type:Boolean,
        default:false
      }
    },

    data() {
      return {
      };
    },
    methods: {
      handleClose(done) {
        this.$emit('close');
        trigger('click');
      },
      closeModal(){
        this.$emit('close');
        trigger('click');
      }
    }
  };
</script>

<style>

</style>
