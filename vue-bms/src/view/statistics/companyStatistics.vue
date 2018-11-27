<template>
	<div>
    <i-breadcrumb>
      <div slot="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">商机统计</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/CompanyStatistics' }">公司统计</el-breadcrumb-item>

      </div>
    </i-breadcrumb>
    <div>
      <div id="main" style="width: 400px;height: 300px">
          <e-bar></e-bar>
      </div>
    </div>
	</div>
</template>

<script>
  import iBreadcrumb from '@/components/breadcrumb/element-ui-breadcrumb'
  import eBar  from '@/components/echart/bar'
  export default {
    data(){
      return {}
    },
    components:{
      iBreadcrumb,
      eBar
    }
  }
</script>

<style>

</style>
