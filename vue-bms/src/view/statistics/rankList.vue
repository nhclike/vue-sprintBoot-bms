<template>
  <div>
    <ul>
      <li>
        <span class = "rank_num"><img alt="" src="./../../images/rank_first.png"></span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num"><img alt="" src="./../../images/rank_second.png"></span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num"><img alt="" src="./../../images/rank_third.png"></span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">4</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">5</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">6</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>

      <li>
        <span class = "rank_num">4</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">5</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">6</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">4</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">5</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
      <li>
        <span class = "rank_num">6</span>
        <span class = "business_name">沙漠绿化项目</span>
        <span class = "business_rice">8,200,000</span>
      </li>
    </ul>
  </div>
</template>

<script>
    import {Statistics} from "./../../api/api"
    export default {
        name: "rank-list",
        data(){
          return {

          }
        },
        created(){
          this.getRankData();
        },
        methods:{
          //获取排名数据
          getRankData(){
            Statistics.statisticsGetRank().then((res)=>{
              console.log(res);
            })
          }
        }
    }
</script>

<style scoped lang="less">
  @import "./../../less/statistics/statistics";
  div{
    flex: 1;
    overflow:auto;
    ul{
      li{
        height: 40px;
        line-height: 40px;
        color: #333;
        .business_rice{
          float:right;
          margin-right:30px;
        }
        .rank_num{
          display: inline-block;
          height: 20px;
          width: 20px;
          background: #f0f2f5;
          border-radius: 20px;
          text-align: center;
          line-height: 20px;
          margin-right:15px;
        }

      }
    }
  }
</style>
