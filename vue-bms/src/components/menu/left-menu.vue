<template>
	<div>
    <div class="text-center Menu" >
      <ul class="mainMenu" id="tab_list">
        <li v-for="item,index in menuData" :key="item.id">
          <div class="titleMenu clearfloat">
            <span class="pull-left" @click="toggleShow(index)">{{item.name}}</span>
          </div>
          <ul class="subMenu" ref="subMenu">
            <router-link tag="li" class="tab-item" v-for="(subItem,subIndex) in item.child" :key="subItem.id" :to="'/index/'+subItem.url">
              <span class="tab-link">{{subItem.name}}</span>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
	</div>
</template>

<script >
  export default {
    data(){
      return {
        flag:true,
        menuData:[
          {
            id:'BusinessManage',
            name:"商机管理",
            url:'',
            child:[
              {
                name:'商机管理',
                url:'BusinessManage',
              }
            ]
          },
          {
            id:'SystemManage',
            name:'系统管理',
            url:'',
            child:[
              {
                name:'用户管理',
                url:'user',
              },
              {
                name:'部门管理',
                url:'dept',
              },
              {
                name:'角色权限管理',
                url:'role',
              }
            ]
          }
        ]
      }
    },
    created(){

    },
    methods:{
      toggleShow(index){
        if(this.$refs.subMenu[index].style.display==="none"){
          this.$refs.subMenu[index].style.display='block';
        }
        else{
          this.$refs.subMenu[index].style.display='none';
        }
      }
    }
  }
</script >

<style  scoped lang="less">
  @import "./../../less/comm/variable.less";

  .Menu{
  @menu_bg_color:#EEF5FF;
  @content_bg_color:#fff;
  @title_bg_color:#1D82ED;
  @sub_text_color:#1D82ED;
  @menu_width:260px;
  @menu_height:56px;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
    z-index:999;
    width:@menu_width;
    height: 100%;
    padding-right: 20px;
    ul.mainMenu{
      text-align: center;
      height: 100%;
      background: @text_color;
      li{
        overflow: hidden;
        margin-bottom: 10px;
        div.titleMenu{
          width: 100%;
          padding: 0 15px 0 45px;//此处需对应动态调整，建议0不动
          background: @title_bg_color;
          color: @text_color;
          cursor: pointer;
          height: @menu_height;
          line-height: @menu_height;
          text-align: center;
          font-weight: normal;

          font-size:@text_font_size_md;
          i.pull-left{
            margin-top:16px;//此处需对应动态调整
            margin-right: 15px;//此处需对应动态调整
          }
          i.pull-right{
            margin-top:16px;//此处需对应动态调整
          }
        }
        ul.subMenu{
          li{
            text-align: center;
            height: @menu_height;
            cursor: pointer;
            font-weight: normal;
            line-height: @menu_height;
            font-size:@text_font_size_sm;
            color:@text_color_g;
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 50px;
            .tab-item{
              span{
                color:@theme_color;
                background-color: #fff;
              }
            }

          }
          .tab-item.router-link-exact-active.router-link-active{
            background-color: @theme_color;
            span{
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
