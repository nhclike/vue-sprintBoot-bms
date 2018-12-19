<template>
  <div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/PersonalStatistics' }">个人统计</el-breadcrumb-item>

      </div>
    </i-breadcrumb>
  </div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'

  export default {
    data(){
      return {}
    },
    components:{
      iBreadcrumb
    }
  }
</script>

<style>

</style>
