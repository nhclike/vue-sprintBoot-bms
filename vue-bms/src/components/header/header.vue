<template>
	<div  class="m-header">
    <div class="left">
      <div class="icon"></div>
      <h1 class="text">商机管理平台</h1>
    </div>

    <div class="right">
      <ul>
        <li>
          <span @click="toggleShow">{{userName}}</span>
        </li>
        <li>
          <span @click="logout" v-show="flag">退出登录</span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        flag:false
      }
    },
    computed:{
      ...mapGetters([
        'userName'
      ])
    },
    methods:{
      logout(){
        console.log("logout");
        this.$router.push({
          path:'/login'
        });
      },
      toggleShow(){
        this.flag=!this.flag;
      }
    }
  }
</script>

<style scoped lang="less">
 @import "./../../less/comm/variable.less";
 .m-header{
    @header_height:@top_height;
   position: fixed;
   height: @header_height;
   text-align: center;
   color:@theme_color;
   font-size: 0;
   top:0;
   left: 0;
   right: 0;
   z-index: 500;

   .left{
     float: left;
     width: @left_width;
     background-color:@theme_color;
     .text{
       display: block;
       line-height: @header_height;
       font-size:28px ;
       float: left;
       color:#fff;
       padding-left:20px;
     }
   }

   .right{
     float: right;
     height: @header_height;
     width: 120px;
     background-color: @bg_color_w;
      li{
        background-color: @bg_color_w;
        cursor: pointer;
      }
      span{
       font-size:20px ;
       height:@header_height;
       line-height: @header_height;
       background-color: @bg_color_w;
       color: @text_color_g;
     }
   }
 }
</style>
