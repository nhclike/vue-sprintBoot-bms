<template>
  <div class="table">

    <div class="handle-box">

      <el-input v-model="deptNo" placeholder="部门编号" class="handle-input mr10"></el-input>
      <el-input v-model="deptName" placeholder="部门名称" class="handle-input mr10"></el-input>
      <el-select v-model="deptStatus" placeholder="部门状态" class="handle-select mr10">
        <el-option key="1" label="已启用" value="已启用"></el-option>
        <el-option key="2" label="已禁用" value="已禁用"></el-option>
      </el-select>
      <el-button type="primary" icon="search" >查询</el-button>
      <el-button type="primary" icon="search">新增</el-button>

    </div>
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="deptNo" label="部门编号"  >
      </el-table-column>
      <el-table-column prop="deptName" label="部门名称">
      </el-table-column>
      <el-table-column prop="deptType" label="部门类型" >
      </el-table-column>
      <el-table-column prop="deptManager" label="部门负责人" >
      </el-table-column>
      <el-table-column prop="deptStatus" label="部门状态" >
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="small" >编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change ="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: '',
        tableData: [],
        cur_page: 1,
        deptNo:'',
        deptName:'',
        deptStatus: '',
        params:{},
        is_search: false
      }
    },
    created(){
      this.getData();
    },
    computed: {

    },
    methods: {
      handleCurrentChange(val){
        this.cur_page = val;
        this.getData();

      },
      getData(){
        this.params={
          pageSize:10,
          pageNum:this.cur_page,
          deptNo:this.deptNo,
          deptName:this.deptName,
          deptStatus:this.deptStatus
        }
        let self = this;
        if(process.env.NODE_ENV === 'development'){
          self.url = '/dept_getList';
        };
        self.$axios.post(self.url,this.params).then((res) => {
          self.tableData = res;
          console.log(self.tableData)
        })
        /*this.$axios.get("/static/deptList.json").then((res)=>{
          self.tableData=res.data.rows;
          console.log(res);
        })*/
      }
    }
  }
</script>

<style slot-scope>
  .table{
    padding:20px 0;
  }
  .handle-box{
    margin-bottom: 20px;
  }
  .handle-select{
    width: 120px;
  }
  .handle-input{
    width: 300px;
    display: inline-block;
  }
</style>
