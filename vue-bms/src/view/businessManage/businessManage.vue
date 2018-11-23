<template>
  <div class="BMcontainer">
    <div class="context">
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item label="项目名称">
          <el-input v-model="queryForm.proName" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="queryForm.userName" placeholder="用户名称"></el-input>
        </el-form-item>
        <el-form-item label="所属区域">
          <el-input v-model="queryForm.area" placeholder="所属区域"></el-input>
        </el-form-item>
        <el-form-item label="填表时间">
          <el-date-picker type="date" v-model="queryForm.writeDate" placeholder="填表时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="项目状态">
          <el-select v-model="queryForm.proStatus" placeholder="项目状态">
            <el-option label="待提交" value="1"></el-option>
            <el-option label="已提交" value="2"></el-option>
            <el-option label="待分配" value="3"></el-option>
            <el-option label="已分配" value="4"></el-option>
            <el-option label="待完成" value="5"></el-option>
            <el-option label="已完成" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="reset">重置</el-button>

          <el-button type="primary" @click="query">查询</el-button>
          <el-button type="primary" @click="add">新增</el-button>

        </el-form-item>
      </el-form>
      <i-table
        :list="list"
        @handleSelectionChange="handleSelectionChange"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
        :options="options"
        :columns="columns"
        :operates="operates"
        :total="total"
      ></i-table>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  import { BusinessManage } from '../../api/api'

  import iTable from '@/components/table/comm-table'
  export default{
    data(){
      return {
        total:0,
        pageSize:10,
        pageNum:1,
        queryForm:{},
        list: [], // table数据
        options: {
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: false, // 是否支持列表项选中功能
        }, // table 的参数
        columns: [

          {
            prop: 'proName',
            label: '项目名称',
            align: 'center',
          },
          {
            prop: 'userName',
            label: '用户名称',
            align: 'center',
          },
          {
            prop: 'area',
            label: '所属区域',
            align: 'center',

          },
          {
            prop: 'proStatus',
            label: '项目状态',
            align: 'center',

          },
          {
            prop: 'proType',
            label: '项目类型',
            align: 'center',

          },
          {
            prop: 'writeDate',
            label: '填表时间',
            align: 'center',

          }
        ], // 需要展示的列
        operates: {
          width: 300,
          fixed: 'right',
          list: [
            {
              id:'1',
              label: '修改',
              type: 'warning',
              show: true,
              icon: 'el-icon-edit',
              plain: true,
              width:60,
              disabled: false,
              method: (index, row) => {
                this.handleEdit(index, row)
              }
            },
            {
              id:'2',
              label: '查看',
              type: 'danger',
              icon: 'el-icon-delete',
              show: true,
              plain: false,
              width:60,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            },
            {
              id:'3',
              label: '删除',
              type: 'danger',
              icon: 'el-icon-delete',
              show: true,
              plain: false,
              width:60,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            }
          ]
        } ,// 列操作按钮
      }
    },
    components:{
      iTable
    },
    created(){
      this.getTableData();
    },
    methods:{
      //获得表格数据
      getTableData(){
        let params={
          pageSize:this.pageSize,
          pageNum:this.pageNum,
          proName:this.queryForm.proName,
          userName:this.queryForm.userName,
          area:this.queryForm.area,
          writeDate:this.queryForm.writeDate,
          proStatus:this.queryForm.proStatus
        };
        BusinessManage.BMList(params).then((res)=>{
          console.log(res);
          let data=res.data;
          this.total=data.total;
          this.list=data.rows;
        })
      },
      // 选中行
      handleSelectionChange (val) {
        //console.log('handleSelectionChange:', val)
      },
      //改变pageSize
      handleSizeChange(val){
        this.pageSize=val;
        this.getTableData();
      },
      //改变当前页
      handleCurrentChange(val){
        this.pageNum=val;
        this.getTableData();
      },
      //重置
      reset(){
        this.queryForm={};

      },
      //查询
      query(){
        this.getTableData();
      },
      //新增
      add(){
        this.$router.push({
          path:'/index/BusinessManage/BusinessManageAdd'
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
    padding:20px;
    margin:0;
    .context{
      background: #fff;
      height: 100%;
      .demo-form-inline{
        padding-top: 20px;
      }
    }
  }
</style>
