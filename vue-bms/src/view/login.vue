<template>
  <div id="section">

    <div class="bg">
      <img src="./../images/bg.png" alt="" width="100%" height="100%">
    </div>
    <div class="model_center">
      <div id="main">
        <div class="logo">
          <h2 >商机管理系统</h2>
        </div>
        <div id="title">
          <div>
            <h3>欢迎登录系统</h3>
          </div>
        </div>
        <form class="form-horizontal">
          <div class="form-group form-group-lg" >
            <label for="username" class="col-sm-0 control-label"></label>
            <div class="col-sm-12">
              <input type="text"  v-model="loginName" class="form-control" id="username" placeholder="用户名" autofocus>
            </div>
          </div>
          <div class="form-group form-group-lg">
            <label for="userpwd" class="col-sm-0 control-label"></label>
            <div class="col-sm-12">
              <input type="password" v-model="password" class="form-control" id="userpwd" placeholder="密码">
            </div>
          </div>


          <div class="form-group form-group-lg" >
            <div class="col-sm-offset-0 col-sm-12">
              <button type="button" @click="fnLogin()" class="btn btn-block btn-lg" id="btn_login">登&nbsp;&nbsp;录</button>
            </div>
          </div>

        </form>
        <div class="tip" >

          <h4 id="message"></h4>

        </div>
      </div>
    </div>
    <div id="footer_item">
      <!--<img src="./../resources/images/nb_logo.png">
			<span>南北联合信息科技有限公司</span>-->
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
    /*登录接口*/
    import { loginApi } from '../api/api'
    /*更新登录人员*/
    import {mapMutations} from 'vuex'
    export default{
        data () {
            return {
              msg: '这个是Home模板页',
              loginName:'',
              password:''
            }
        },
        created(){
          this.keyupSubmit()
        },
        methods:{
          fnLogin(){
            let params={
              "loginName":this.loginName,
              "password":this.password
            };
            loginApi.userLogin(params).then((result)=>{
              //console.log(result.data.loginName);
              let userName=result.data.loginName;
              if(result.code===1){
                  this.setUserName(userName);
                  this.$router.push({
                    path:'/index'
                  })
              }

            })
          },
          keyupSubmit(){
            document.onkeydown=e=>{
              let _key=window.event.keyCode;
              if(_key===13){
                this.fnLogin()
              }
            }
          },
          ...mapMutations({
            setUserName:'SET_USERNAME'
          })
        }
    }
</script>

<style scoped lang="less">
  @import "./../less/comm/variable.less";
  @import "./../less/comm/login.less";

</style>
