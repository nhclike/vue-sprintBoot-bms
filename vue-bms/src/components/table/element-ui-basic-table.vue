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
      <el-button type="primary" icon="search" @click="add">新增</el-button>
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
          <el-button size="small"  @click="edit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="cur_page"
        :page-sizes="[20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { Dept } from '../../api/api'

  export default {
    data() {
      return {
        url: '',
        tableData: [],
        cur_page: 1,
        cur_page_size:20,
        deptNo:'',
        deptName:'',
        deptStatus: '',
        params:{}
      }
    },
    created(){
      this.getData();
    },
    computed: {
      total(){
        return this.tableData.length;
      }
    },
    methods: {
      getData(){
        this.params={
          pageSize:this.cur_page_size,
          pageNum:this.cur_page,
          deptNo:this.deptNo,
          deptName:this.deptName,
          deptStatus:this.deptStatus
        };
        Dept.deptList(this.params).then((res)=>{
         // console.log(res);
          this.tableData=res.data.rows;
        })
      },
      //更新用户数据
      updateDeptInfo(param){
        Dept.updateDeptInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            console.log(data.msg);
          }
        })
      },

      //删除用户
      deleteDeptInfo(param){
        Dept.deleteDeptInfo(param).then((res)=>{
          let data=res.data;
          console.log(data)
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.cur_page_size=val;
        this.getData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.cur_page=val;
        this.getData()

      },
      edit(params){
        console.log(params);
        this.$emit('edit',params);
      },
      del(params){
        console.log(params);
        this.$emit('delete',params);
      },
      add(){
        this.$emit('add')
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
