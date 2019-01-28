<template>
  <div id="trendMain" style="width:100%;height:100%">

  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    mounted(){
      var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('trendMain'));
      var colors = ['#3aa0ff', '#2fc25b'];
      var option = {
        color: colors,

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          left: '40px',
          right:'55px'
        },
        legend: {
          data:['商机金额','商机个数'],
          x:'right'
        },
        title: {
          text: '商机趋势',
          x: '0%',
          top: '1%',
          textStyle: {
            /* color: '#6666'*/
            color:'#262626',
            fontSize:'16',
            fontWeight:'600',
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 2000,
            position: 'right',
            ayisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#616161'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#d8d8d8',
                type: 'dotted'
              }
            },
            axisLine: {
              show:false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 万'
            }
          },

          {
            type: 'value',
            min: 0,
            max: 20,
            position: 'left',
            ayisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#616161'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#d8d8d8',
                type: 'dotted'
              }
            },
            axisLine: {
              show:false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 个'
            }
          }
        ],
        series: [
          {
            name:'商机金额',
            type:'bar',
            data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33]
          },

          {
            name:'商机个数',
            type:'line',
            yAxisIndex: 1,
            data:[2, 2, 3, 5, 6, 10, 3, 4, 13, 16, 12, 6]
          }
        ]
      };
      // 绘制图表
      myChart.setOption(option);
    }
  }
</script>

<style>

</style>
