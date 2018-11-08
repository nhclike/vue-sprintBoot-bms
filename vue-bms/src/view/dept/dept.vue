<template>
  <div>
    <basic-table></basic-table>

  </div>
</template>

<script>
  import BasicTable from  '@/components/table/basic-table';

  export default {
    data(){
      return {
        msg:"this is a dept page"
      }
    },
    components:{
      BasicTable
    }
  }
</script>

<style>

</style>
