<template>
	<div>
    <div class="indexContainer">
      <div class="contextContainer">
        <div class="top">
          <el-button id="addBtn" type="primary" icon="el-icon-plus" @click="addUser">新增</el-button>
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

    <i-dialog v-bind:mdShow="userEditModal" width="500px"  title="用户编辑" v-on:close="closeModal">
      <div slot="message">
        <user-form ref="userEditForm"
                   :userInfo="userInfo"

                   @saveUserInfo="saveUserInfo"
                   @resetUserInfo="resetUserInfo"
                   :resetBtnShow="false">

        </user-form>
      </div>
    </i-dialog>
    <i-dialog v-bind:mdShow="userAddModal" title="用户新增" v-on:close="closeModal">
      <div slot="message">
        <user-form
          ref="userAddForm"

          :userInfo="null"
          :userNameDisabled="addUserNameDisabled"
          @saveUserInfo="saveUserInfo"
          @resetUserInfo="resetUserInfo"
        >

        </user-form>
      </div>
    </i-dialog>
	</div>
</template>

<script>
  //用户接口
  import { User } from '../../api/api'

  import iTable from '@/components/table/comm-table'
  import iDialog from '@/components/modal/element-ui-dialog'
  import userForm from '@/view/user/userForm'
  export default {
    components: {
      iTable,
      iDialog,
      userForm
    },
    data () {
      return {
        userEditModal:false,
        userAddModal:false,
        addUserNameDisabled:false,
        userEditId:'',
        userInfo:{},
        userForm:{},
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
        } ,// 列操作按钮


      }
    },
    created(){
      //请求用户数据
      this.getUserListDate();

    },
    methods: {
      //请求用户数据
      getUserListDate(){
        var param={
          pageSize:this.pageSize,
          pageNum:this.pageNum
        };
        User.userList(param).then((res)=>{
          this.list=res.data.rows;
          this.total=res.data.total;
        });
      },
      //更新用户数据
      updateUserInfo(param){
        User.updateUserInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            console.log(data.msg);
          }
        })
      },
      //根据用户id拿到用户信息
      getUserInfo(param){
        User.getUserInfo(param).then((res)=>{
          let data=res.data;
          if(data.code==1){
            this.userInfo=data.data;
            console.log('this.userInfo')
            console.log(this.userInfo);
          }
        })
      },


      //删除用户
      deleteUserInfo(param){
        User.deleteUserInfo(param).then((res)=>{
          let data=res.data;
          //console.log(data)
        })
      },
      // 选中行
      handleSelectionChange (val) {
        //console.log('handleSelectionChange:', val)
      },
      //改变pageSize
      handleSizeChange(val){
        this.pageSize=val;
        this.getUserListDate();
      },
      //改变当前页
      handleCurrentChange(val){
        this.pageNum=val;
        this.getUserListDate();
      },
      // 编辑
      handleEdit (index, row) {
        //console.log(' index:', index)
        //console.log(' row:', row);

        this.userEditModal=true;
        this.getUserInfo({"id":row.id});
      },
      // 删除
      handleDel (index, row) {
        //console.log(' index:', index)
        //console.log(' row:', row);
        this.deleteUserInfo({"id":row.id});
        //刷新table
        this.getUserListDate();

      },
      //关闭modal
      closeModal(){
        if(this.userEditModal){
          this.userEditModal=false;
          this.$refs.userEditForm.resetForm('userForm')

        }
        else if(this.userAddModal){
          this.userAddModal=false;
          this.$refs.userAddForm.resetForm('userForm');
        }


      },
      //保存用户信息
      saveUserInfo(value){
        console.log('saveUserInfo');
        console.log(value);
        this.userForm=value;
        //向数据库加入数据
        this.updateUserInfo(value);
        //关闭modal
        this.closeModal();
        //刷新table
        this.getUserListDate();

      },
      //重置用户信息
      resetUserInfo(){
        this.userInfo={}
      },
      //新增用户
      addUser(){
        this.userAddModal=true;


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
