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
    <el-table :data="tData" border style="width: 100%" >
      <el-table-column prop="deptNo" label="部门编号"  >
      </el-table-column>
      <el-table-column prop="deptName" label="部门名称">
      </el-table-column>
      <el-table-column prop="deptType" label="部门类型" >
      </el-table-column>
      <el-table-column prop="deptManager" label="部门负责人" >
      </el-table-column>
      <el-table-column prop="deptStatus" label="部门状态" >
        <template slot-scope="scope">
          <template v-if="scope.row.deptStatus==='1'">
            <el-button type="success" plain>启用</el-button>
          </template>
          <template v-else>
            <el-button type="danger" plain>禁用</el-button>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="small" type="success"  @click="edit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="cur_page"
        :page-sizes="[10, 20, 50]"
        :page-size="cur_page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  /**
   * 针对此表格插件的说明
   * 1table数据一次性请求回来，分页由前端计算属性来完成
   * 2增删改操作将事件广播出去在组件外做处理
   *
   * **/
  import { Dept } from '../../api/api'

  export default {
    data() {
      return {
        url: '',
        tableData: [],
        cur_page:1,
        cur_page_size:10,
        deptNo:'',
        deptName:'',
        deptStatus: '',
        params:{},
        total:0
      }
    },
    created(){
      this.getData();
    },
    computed: {
      tData(){
        return this.tableData.slice((this.cur_page-1)*this.cur_page_size,this.cur_page*this.cur_page_size)
      }
    },
    methods: {
      getData(){
        this.params={
         /* pageSize:this.cur_page_size,
          pageNum:this.cur_page,*/
          deptNo:this.deptNo,
          deptName:this.deptName,
          deptStatus:this.deptStatus
        };
        Dept.deptList(this.params).then((res)=>{
         // console.log(res);
          this.tableData=res.data.rows;
          this.total=this.tableData.length;
        })
      },
      //更新部门数据
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
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.cur_page=val;

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
