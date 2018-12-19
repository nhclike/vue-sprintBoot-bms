<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="mdShow"
      :width="width"
      :before-close="handleClose"
      :modal="modal"
      :close-on-click-modal="closeOnClickModal"
      :show-close="showClose"
      :custom-class="customClass"
      :modal-append-to-body="false"
      center
    >
      <slot name="message"></slot>
      <!--<span slot="footer" class="dialog-footer">
        <slot name="btnGroup"></slot>
      </span>-->
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
      },
      width:{
        type:String,
        default:"30%"
      },
      showClose:{
        type:Boolean,
        default:true
      },
      customClass:{
        type:String,
        default:''
      }
    },

    data() {
      return {
      };
    },
    methods: {
      handleClose(done) {
        this.$emit('close');
      }
    }
  };
</script>

<style>

</style>
