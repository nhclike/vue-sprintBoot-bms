<template>
  <div>
    <div class="indexContainer">
      <div class="contextContainer">
        <div class="top">
          <el-button id="addBtn" type="primary" @click="addRole">新增</el-button>

        </div>
        <div class="tableContainer">
          <i-table :list="list"
                   @handleSelectionChange="handleSelectionChange"
                   @handleSizeChange="handleSizeChange"
                   @handleCurrentChange="handleCurrentChange"
                   :options="options"
                   :columns="columns"
                   :operates="operates"
                   :total="total"
          >
          </i-table>
        </div>

      </div>
    </div>

    <i-dialog v-bind:mdShow="roleEditModal" width="500px"  title="角色编辑" v-on:close="closeModal">
      <div slot="message">
        <role-form ref="roleEditForm" :roleInfo="roleInfo" @saveRoleInfo="saveRoleInfo" @resetRoleInfo="resetRoleInfo" :resetBtnShow="false"></role-form>
      </div>
    </i-dialog>
    <i-dialog v-bind:mdShow="roleAddModal" title="角色新增" v-on:close="closeModal">
      <div slot="message">
        <role-form ref="roleAddForm" :roleInfo="roleInfo" :roleNameDisabled="addRoleNameDisabled"></role-form>
      </div>
    </i-dialog>
  </div>
</template>

<script>
  //角色接口
  import { Role } from '../../api/api'
  import iTable from '@/components/table/comm-table'
  import iDialog from '@/components/modal/element-ui-dialog'
  import roleForm from '@/view/role/roleForm'
  export default {
    components: {
      iTable,
      iDialog,
      roleForm
    },
    data () {
      return {
        roleEditModal:false,
        roleAddModal:false,
        addRoleNameDisabled:false,
        roleEditId:'',
        roleInfo:{},
        total:0,  //table总数
        pageSize:10,
        pageNum:1,
        list: [], // table数据
        options: {
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: false, // 是否支持列表项选中功能
        }, // table 的参数
        columns: [

          {
            prop: 'roleName',
            label: '角色名称',
            align: 'center',
          },
          {
            prop: 'roleSn',
            label: '角色标识',
            align: 'center',
          },
          {
            prop: 'status',
            label: '状态',
            align: 'center',
            formatter:function (row,column) {
              //console.log(row.status);
              if(row.status==='1'){
                return '<span>启用</span>'
              }
              else {
                return '<span>禁用</span>'
              }
            }
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
            }
          ]
        } ,// 列操作按钮


      }
    },
    created(){
      this.getRoleListDate();
    },
    methods: {
      //请求角色数据
      getRoleListDate(){
        var param={
          pageSize:this.pageSize,
          pageNum:this.pageNum
        };
        Role.roleList(param).then((res)=>{
          this.list=res.data.rows;
          this.total=res.data.total;
        });
      },
      //更新角色数据
      updateRoleInfo(param){
        Role.updateRoleInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            console.log(data.msg);
          }
        })
      },
      //根据角色id拿到角色信息
      getRoleInfo(param){
        Role.getRoleInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            this.roleInfo=data.data;
            console.log(this.roleInfo);
            this.roleInfo.password='';
          }
        })
      },
      // 选中行
      handleSelectionChange (val) {
        //console.log('handleSelectionChange:', val)
      },
      //改变pageSize
      handleSizeChange(val){
        this.pageSize=val;
        this.getRoleListDate();
      },
      //改变当前页
      handleCurrentChange(val){
        this.pageNum=val;
        this.getRoleListDate();
      },
      // 编辑
      handleEdit (index, row) {
        //console.log(' index:', index)
        //console.log(' row:', row);
        this.roleEditModal=true;
        this.getRoleInfo({"id":row.id})
      },
      //关闭modal
      closeModal(){
        this.roleEditModal=false;
        this.roleAddModal=false;
        this.$refs.roleAddForm.resetForm('roleForm');
        this.$refs.roleEditForm.resetForm('roleForm')

      },
      //保存角色信息
      saveRoleInfo(){
        //向数据库加入数据
        this.updateRoleInfo(this.roleInfo);
        //关闭modal
        this.closeModal();
        //刷新table
        this.getRoleListDate();

      },
      //重置角色信息
      resetRoleInfo(){
        this.roleInfo={}
      },
      //新增角色
      addRole(){
        this.roleAddModal=true;
        //角色信息置空
        this.roleInfo={};
      }
    }
  }
</script>

<style scoped lang="less">
  .top{
    position: relative;
    height:50px;
    #addBtn{
      position: absolute;
      top:5px;
      left:5px;
    }
  }
</style>
