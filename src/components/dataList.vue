<template>
  <div class="hello">
    <head-top></head-top>
    <h1 class="data-serve-title">{{ msg }}</h1>
    <div id="chart-center-map" style="width: 60%;min-height: 750px;margin: 0 auto;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../static/js/china'
import headTop from '../components/head'
export default {
  name: 'HelloWorld',
  components: {
    headTop
  },
  data () {
    return {
      msg: '全国各地区服务商分布及数量'
    }
  },
  mounted () {
    this.chinaData()
  },
  methods: {
    chinaData () {
      var chart3 = echarts.init(document.getElementById('chart-center-map'));
      var state3 = {
        status: 1,
        datas: {
          data: [
            // { name: "安徽", value: 21},
            {name: "北京", value: 20},
            {name: "福建", value: 53},
            {name: "甘肃", value: 3},
            {name: "广东", value: 38},
            {name: "广西", value: 12},
            {name: "贵州", value: 7},
            // { name: "河北", value: 14},
            {name: "河南", value: 64},
            {name: "黑龙江", value: 22},
            {name: "湖北", value: 83},
            {name: "湖南", value: 19},
            {name: "吉林", value: 5},
            {name: "江苏", value: 35},
            // { name: "江西", value: 10},
            {name: "辽宁", value: 48},
            {name: "内蒙古", value: 7},
            {name: "宁夏", value: 2},
            {name: "山东", value: 72},
            {name: "山西", value: 22},
            {name: "陕西", value: 20},
            {name: "上海", value: 16},
            {name: "四川", value: 43},
            {name: "天津", value: 29},
            {name: "新疆", value: 2},
            {name: "云南", value: 23},
            {name: "浙江", value: 45},
            {name: "重庆", value: 4}
          ],
          geoCoordMap: {
            "安徽": [117.27, 31.52],
            "北京": [116.24, 40.19],
            "福建": [119.18, 26.05],
            "甘肃": [103.51, 36.04],
            "广东": [113.14, 23.08],
            "广西": [108.19, 22.48],
            "贵州": [106.42, 26.35],
            "河北": [114.30, 38.02],
            "河南": [113.40, 34.46],
            "黑龙江": [126.36, 47.44],
            "湖北": [114.17, 30.35],
            "湖南": [112.59, 28.12],
            "吉林": [125.19, 43.54],
            "江苏": [120.16, 33.03],
            "江西": [115.55, 28.40],
            "辽宁": [123.25, 41.48],
            "内蒙古": [108.41, 40.48],
            "宁夏": [106.16, 38.27],
            "山东": [118.00, 36.40],
            "山西": [112.33, 37.54],
            "陕西": [108.57, 34.17],
            "上海": [121.29, 31.14],
            "四川": [104.04, 30.40],
            "天津": [117.12, 39.02],
            "新疆": [87.36, 43.45],
            "云南": [102.42, 25.04],
            "浙江": [120.10, 29.16],
            "重庆": [106.33, 29.35]
          }
        }
      }

      var data3 = state3.datas.data;
      var geoCoordMap = state3.datas.geoCoordMap;
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };

      var convertedData = [
        convertData(data3),
        convertData(data3.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 6))
      ];
      data3.sort(function (a, b) {
        return a.value - b.value;
      })
      data3 = data3.slice(-10);
      // var selectedItems = [];
      var categoryData = [];
      var barData = [];
      var sum = '';
      // var count = data3.length;
      for (var i = 0; i < data3.length; i++) {
        categoryData.push(data3[i].name);
        barData.push(data3[i].value);
        sum += data3[i].value;
      }
      var option3 = {
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        // visualMap:{
        //     inRange: {
        //         color: ['#e0ffff', '#006edd']
        //     },
        // },
        title: [{
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        }, {
          id: 'statistic',
          // text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
          right: 120,
          top: 40,
          width: 100,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }],
        geo: {
          map: 'china',
          left: '19%',
          top: '24%',
          center: [117.98561551896913, 31.205000490896193],
          zoom: 0.99,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#0C2565',
              borderColor: '#0894eb'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        tooltip: {
          // show: false,
          trigger: 'item',
          formatter: function (convertedData) {
            // console.log(convertedData)
            var str = ''
            if (convertedData.value[2] === undefined) {
              return str = convertedData.name + ':' + convertedData.value
            } else {
              return str = convertedData.name + ':' + convertedData.value[2]
            }
          }
        },
        grid: {           // 联动图表中的条形统计图参数
          right: 30,
          top: 200,
          bottom: 220,
          width: '12%'
        },
        xAxis: {
          type: 'value',
          scale: true,
          position: 'top',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: '45',
            margin: 2,
            textStyle: {
              color: '#aed2ff'
            }
          }
        },
        yAxis: {
          type: 'category',
          //  name: 'TOP 20',
          nameGap: 18,
          axisLine: {
            lineStyle: {
              color: '#aed2ff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#aed2ff'
            }
          },
          data: categoryData
        },
        series: [{
          // name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'geo',
          // barWidth: 5,
          data: convertedData[0],
          symbolSize: function (val) {
            // return Math.max(val[2] / 100, 8);
            return val[2] / 10;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#FF8C00',
              position: 'right',
              show: true
            }
          }
        }, {
          //  name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertedData[0],
          symbolSize: function (val) {
            // return Math.max(val[2] / 500, 8);
            return val[2] / 5;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 50,
              shadowColor: '#EE0000'
            }
          },
          zlevel: 1
        }, {
          id: 'bar',
          zlevel: 2,
          type: 'bar',
          barWidth: 10,
          height: 200,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#5ABFEE'
            }
          },
          data: data3
        }]
      };

      function renderBrushed (params) {
        var mainSeries = params.batch[0].selected[0];

        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        var maxBar = 30;
        var sum = 0;
        var count = 0;

        for (var i = 0; i < mainSeries.dataIndex.length; i++) {
          var rawIndex = mainSeries.dataIndex[i];
          var dataItem = convertedData[0][rawIndex];
          var pmValue = dataItem.value[2];

          sum += pmValue;
          count++;

          selectedItems.push(dataItem);
        }

        selectedItems.sort(function (a, b) {
          return a.value - b.value;
        });

        for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
          categoryData.push(selectedItems[i].name);
          barData.push(selectedItems[i].value[2]);
        }
        this.setoption3({
          yAxis: {
            data: categoryData
          },
          xAxis: {
            axisLabel: {
              show: !!count
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (barData) {
              var str = ''
              return str = barData.name + ':' + barData.value[2]
            }
          },
          title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
          },
          series: {
            id: 'bar',
            barGap: '4%',
            data: barData
          }
        });
      }

      chart3.setOption(option3);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .data-serve-title{
    margin-top: 50px;}
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
