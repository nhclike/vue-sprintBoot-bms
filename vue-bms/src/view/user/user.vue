<template>
	<div>
    <i-table :list="list"
             @handleSelectionChange="handleSelectionChange"
             :options="options"
             :columns="columns"
             :operates="operates"
    >
    </i-table>
	</div>
</template>

<script>
  //用户接口
  import { User } from '../../api/api'

  import iTable from '@/components/table/comm-table'
  export default {
    components: {iTable},
    data () {
      return {
        list: [], // table数据
        options: {
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: false, // 是否支持列表项选中功能
        }, // table 的参数
        columns: [
          {
            prop: 'id',
            label: '用户表id',
            align: 'center',
          },
          {
            prop: 'loginName',
            label: '登录名',
            align: 'center',
          },
          {
            prop: 'realName',
            label: '真实姓名',
            align: 'center',
          },
          {
            prop: 'createTime',
            label: '创建时间',
            align: 'center',
          },
          {
            prop: 'createUser',
            label: '创建人',
            align: 'center',
          },
          {
            prop: 'description',
            label: '描述',
            align: 'center',
          }
        ], // 需要展示的列
        operates: {
          width: 200,
          fixed: 'right',
          list: [
            {
              id:'1',
              label: '编辑',
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
        } // 列操作按钮
      }
    },
    created(){
      this.getUserListDate();
    },
    methods: {
      //请求用户数据
      getUserListDate(){
        var param={
          pageSize:10,
          pageNum:1
        }
        User.userList(param).then((res)=>{
         //console.log(res);
          this.list=res.data.rows;
          console.log(this.list);
        })
      },
      // 选中行
      handleSelectionChange (val) {
        console.log('val:', val)
      },
      // 编辑
      handleEdit (index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      },
      // 删除
      handleDel (index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      }
    }
  }
</script>

<style>

</style>
