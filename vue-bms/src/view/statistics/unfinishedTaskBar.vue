<template>
	<div id="unfinishedMain" style="width:100%;height:100%">

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
      var myChart = echarts.init(document.getElementById('unfinishedMain'));
      var option = {
        opacity:0.6,
        tooltip: {
          show: false
        },
        legend: {
          right: 0,
          top: 0,
          data: ['距离'],
          textStyle: {
            color: '#ee4145'
          }
        },
        xAxis: {
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          ayisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show:false
          },
          axisLine: {
            show:false
          },
          axisTick: {
            show: false
          }

        },

        series: [
          {
            type: 'bar',
            data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
            itemStyle: {
              normal: {
                color: '#3aa0ff',
                label: {
                  show: false
                }
              }
            }
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
