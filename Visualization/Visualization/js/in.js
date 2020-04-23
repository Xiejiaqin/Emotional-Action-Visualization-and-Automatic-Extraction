// 柱状图1
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart1"));

    var option = {
        title: {
            text: '快乐',
            subtext: 'Happiness',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['快乐','高兴','欢乐','开心','愉快',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    }
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [1000,1000,1000,1000,1000],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [10,209,16,85,33],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };    

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();
// 柱状图2
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart2"));

    var option = {
        title: {
            text: '难过',
            subtext: 'Sadness',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['难过','悲伤','伤心','悲痛','痛心',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    }
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [1100,1100,1100,1100,1100],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [65,44,88,103,45],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };    

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();
// 柱状图3
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart3"));

    var option = {
        title: {
            text: '愤怒',
            subtext: 'Anger',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['愤怒','生气','气愤','恼火','恼怒',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    }
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [900,900,900,900,900],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [128,80,152,92,122],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };    

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();
// 柱状图4
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart4"));

    var option = {
        title: {
            text: '害怕',
            subtext: 'Fear',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['害怕','恐惧','恐慌','畏惧',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    }
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [900,900,900,900],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [42,10,11,7],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };    

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();
// 柱状图5
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart5"));

    var option = {
        title: {
            text: '讨厌',
            subtext: 'Disgust',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['讨厌','仇恨','厌恶','痛恨','怨恨',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    }
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [1000,1000,1000,1000,1000],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [48,18,43,76,22],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };    

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();
// 柱状图6
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart6"));

    var option = {
        title: {
            text: '惊讶',
            subtext: 'Surprise',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '2%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#2f89cf','#59d2c9'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { 
                type: 'shadow'  
            }
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '4%',
            bottom: '-1%',
            containLabel: true
        },
        xAxis: {type: 'category',
                data: ['惊讶','震惊','大吃一惊','惊奇','难以置信',],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                    },
                  },
                  axisLine: {
                    show: false
                  }
        },
        yAxis: {axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        series: [
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '语料',
            data: [1100,1100,1100,1100,1100],
            label: {
                    show: true,
                    position: 'top'
                },
            },
            {type: 'bar',
            itemStyle: {
                barBorderRadius:5,
            },
            name: '标注语料',
            data: [68,41,81,21,15],
            label: {
                    show: true,
                    position: 'top'
                },
            },
        ]
    };  
option = newline(option, 2, 'xAxis');
myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();

//雷达图
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart7"));

    var option = {
        title: {
            text: '产生行为情况',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        color: ['#fb7293','#ffdb5c'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            left: 'center',
            bottom: '-3%',
            data: ['产生行为概率', '产生多个行为概率'],
            itemWidth: 12,
            itemHeight: 6,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        radar: [
            {},
            {
                indicator: [
                    {text: '快乐', max: 0.1},
                    {text: '难过', max: 0.1},
                    {text: '愤怒', max: 0.1},
                    {text: '害怕', max: 0.1},
                    {text: '讨厌', max: 0.1},
                    {text: '惊讶', max: 0.1},
                ],
                radius: 60,
                center: ['50%','53%'],
                
            },
        ],
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                radarIndex: 1,
                areaStyle: {},
                axisTick: {
                    lineStyle:{
                        color : 'rgba(255,255,255,.2)',
                    }
                },
                axisLabel:{
                    margin : 2,
                    color : 'rgba(255,255,255,.8)',
                },
                data: [
                    {
                        value: [0.046, 0.052, 0.192, 0.006, 0.036,0.035],
                        name: '产生行为概率'
                    },
                    {
                        value: [0.003239, 0.004098, 0.017037, 0.001875, 0.003077,0.002667],
                        name: '产生多个行为概率'
                    }
                ]
            },
        ],
    };
myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();

//饼图
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart8"));

    var option = {
        title: {
            text: '情感行为分布',
            // subtext: '纯属虚构',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        color: ['#2f89cf','#ff9f7f','#59d2c9','#ffdb5c','#e7bcf3','#fb7293'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: '-3%',
            data: ['当前子句', '前2个子句', '前1个子句', '后1个子句', '后2个子句', '其他'],
            itemWidth: 12,
            itemHeight: 6,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                type: 'pie',
                // radius: '50%',
                radius: [0,60],
                center: ['50%','47%'],
                roseType: 'area',
                data: [
                    {value: 731, name: '当前子句'},
                    {value: 7, name: '前2个子句'},
                    {value: 35, name:'前1个子句'},
                    {value: 802, name: '后1个子句'},
                    {value: 44, name: '后2个子句'},
                    {value: 28, name: '其他'},
                ]
            }
        ]
    };
myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();

//折线图
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart10"));
    var xAxisData = ['快乐', '难过', '愤怒', '害怕', '讨厌', '惊讶'];
    var data1 = [336,319,518,66,189,226];
    var data2 = [-82,-58,-137,-17,-45,-75];
    
    option = {
        title: {
            text: '模型预测结果',
            left: 'center',
            textStyle: {
                color : '#fff',
            },
        },
        grid: {
            top: '25%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            data: ['语料总数', '标注错误数量'],
            type: 'scroll',
            //orient: 'vertical',
            right: '5%',
            top: '0%',
            itemWidth: 12,
            itemHeight: 8,
            textStyle: {
                color : 'rgba(255,255,255,.8)',
            },
        },
        color: ['#59d2c9','#ff9f7f','#fb7293'],
                tooltip: {
                trigger: 'axis',
                axisPointer: { 
                    type: 'shadow'  
                }
            },
        xAxis: {
            data: xAxisData,
            axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.8)",
                }
              },
              axisLine: {
                show: false
              }
        },
        yAxis: [{
            name: '句子数量',
            nameTextStyle:{
                color: "rgba(255,255,255,.8)",
            },
            axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
            {
                name: '准确率%',
                nameTextStyle:{
                    color: "rgba(255,255,255,.8)",
                },
                min:0,
                max:100,
                type: 'value',
                axisLabel:{
                    color:"white",
                    },
                    axisLabel: {
                        textStyle: {
                          color: "rgba(255,255,255,.8)",
                          fontSize: "12"
                        }
                      },
                      axisLine: {
                        lineStyle: {
                          color: "rgba(255,255,255,.1)"
                          // width: 1,
                          // type: "solid"
                        }
                      },
                      splitLine: {
                        show: false,
                      }
            }

        ],
        series: [
            {
                center: ['50%', '75%'],
                name: '语料总数',
                type: 'bar',
                stack: 'one',
                data: data1,
                itemStyle: {
                    barBorderRadius:2,
                },
                label: {
                    show: true,
                    position: 'top'
                },
                    barWidth:'50%',
            },
            {
                name: '标注错误数量',
                type: 'bar',
                stack: 'one',
                data: data2,
                itemStyle: {
                    barBorderRadius:2,
                },
                label: {
                    show: true,
                    position: 'bottom'
                },
            },
            {
                name:'准确率%',
            yAxisIndex: 1,
            data: [75.60,81.82,73.55,74.24,76.19,66.81],
            type: 'line',
            label: {
                show: true,
                position: 'top'
            },
        }
        ]
    };   

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();

//关系图
(function(){
    var myChart_b2bbc894965d41a2b8dccf4539d72613 = echarts.init(document.querySelector('.bar .chart9'));
    var option_b2bbc894965d41a2b8dccf4539d72613 = {
        "title": [
            {
                "text": "\u60c5\u611f\u884c\u4e3a\u5206\u6790",
                "subtext": "",
                "left": "center",
                "top": "auto",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 18
                },
            }
        ],
        "series_id": 2126784,
        "series": [
            {
                "type": "graph",
                "name": "",
                "layout": "force",
                "symbol": "circle",
                "circular": {
                    "rotateLabel": false
                },
                "force": {
                    "repulsion": 100,
                    "edgeLength": 50,
                    "gravity": 0.2
                },
                "label": {
                    "normal": {
                        "show": false,
                        "position": "right",
                        "textStyle": {
                            "color": null,
                            "fontSize": 12
                        }
                    },
                    "emphasis": {
                        "show": true,
                        "position": null,
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 12
                        }
                    }
                },
                "lineStyle": {
                    "normal": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0.2,
                        "type": "solid",
                        "color": "#aaa"
                    }
                },
                "roam": true,
                "focusNodeAdjacency": true,
                "data": [
                    {
                        "name": "\u5feb\u4e50",
                        "symbolSize": 5,
                        "draggable": "False",
                        "value": 1,
                        "category": "1",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u9ad8\u5174",
                        "symbolSize": 10,
                        "draggable": "False",
                        "value": 1,
                        "category": "1",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6b22\u4e50",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "1",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u5fc3",
                        "symbolSize": 6,
                        "draggable": "False",
                        "value": 1,
                        "category": "1",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6109\u5feb",
                        "symbolSize": 9,
                        "draggable": "False",
                        "value": 1,
                        "category": "1",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u96be\u8fc7",
                        "symbolSize": 17,
                        "draggable": "False",
                        "value": 1,
                        "category": "2",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60b2\u4f24",
                        "symbolSize": 7,
                        "draggable": "False",
                        "value": 1,
                        "category": "2",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4f24\u5fc3",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "2",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60b2\u75db",
                        "symbolSize": 6,
                        "draggable": "False",
                        "value": 1,
                        "category": "2",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u75db\u5fc3",
                        "symbolSize": 10,
                        "draggable": "False",
                        "value": 1,
                        "category": "2",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6124\u6012",
                        "symbolSize": 16,
                        "draggable": "False",
                        "value": 1,
                        "category": "3",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u751f\u6c14",
                        "symbolSize": 13,
                        "draggable": "False",
                        "value": 1,
                        "category": "3",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6c14\u6124",
                        "symbolSize": 23,
                        "draggable": "False",
                        "value": 1,
                        "category": "3",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u607c\u706b",
                        "symbolSize": 12,
                        "draggable": "False",
                        "value": 1,
                        "category": "3",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u607c\u6012",
                        "symbolSize": 18,
                        "draggable": "False",
                        "value": 1,
                        "category": "3",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5bb3\u6015",
                        "symbolSize": 7,
                        "draggable": "False",
                        "value": 1,
                        "category": "4",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6050\u60e7",
                        "symbolSize": 7,
                        "draggable": "False",
                        "value": 1,
                        "category": "4",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6050\u614c",
                        "symbolSize": 8,
                        "draggable": "False",
                        "value": 1,
                        "category": "4",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u754f\u60e7",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "4",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8ba8\u538c",
                        "symbolSize": 5,
                        "draggable": "False",
                        "value": 1,
                        "category": "5",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4ec7\u6068",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "5",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u538c\u6076",
                        "symbolSize": 16,
                        "draggable": "False",
                        "value": 1,
                        "category": "5",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u75db\u6068",
                        "symbolSize": 6,
                        "draggable": "False",
                        "value": 1,
                        "category": "5",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6028\u6068",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "5",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60ca\u8bb6",
                        "symbolSize": 12,
                        "draggable": "False",
                        "value": 1,
                        "category": "6",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u9707\u60ca",
                        "symbolSize": 10,
                        "draggable": "False",
                        "value": 1,
                        "category": "6",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u5403\u4e00\u60ca",
                        "symbolSize": 19,
                        "draggable": "False",
                        "value": 1,
                        "category": "6",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60ca\u5947",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "6",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u96be\u4ee5\u7f6e\u4fe1",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "6",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u63d0\u5347",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5b66\u4e60",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8bb2\u8ff0",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6cdb\u7ea2",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u9676\u9189",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u5c1d",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u5f85",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6d88\u8d39",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u63d0\u4f9b",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8feb\u4e0d\u53ca\u5f85",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5408\u4f5c",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u73a9\u800d",
                        "symbolSize": 5,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u6000\u5927\u7b11",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u8c22",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4ecb\u7ecd",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u76f8\u62e5",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u653e",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5173\u6ce8",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u7b54\u5e94",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5fd9\u788c",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u51c6\u5907",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u843d\u6cea",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u79bb\u5a5a",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u81ea\u6740",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6d41\u8fc7\u6cea",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5fc3\u75bc",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u63a5\u53d7",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u592a\u613f",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u900f\u9732",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u54ed\u6ce3",
                        "symbolSize": 5,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u820d\u4e0d\u5f97",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u75db\u54ed",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u50f5\u786c",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5591\u54d1",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u54ed",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60bc\u5ff5",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8fce\u63a5",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8c34\u8d23",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u63d0\u9192",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u9009\u62e9",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6295\u8bc9",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8981\u6c42",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6b7b\u4ea1",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u538b\u529b",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6307\u8d23",
                        "symbolSize": 5,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u8bba",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8868\u793a",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u901a\u7ea2",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u58f0",
                        "symbolSize": 8,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8d76\u7d27",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u544a\u8bc9",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u95ee",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u51fa\u6765",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u7528\u529b",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4f4f\u624b",
                        "symbolSize": 4,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8bc1\u660e",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5e0c\u671b",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8f9e\u804c",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u72e0\u72e0",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62a5\u590d",
                        "symbolSize": 6,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6307\u793a",
                        "symbolSize": 3,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u72af\u9519\u8bef",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u6562",
                        "symbolSize": 8,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u6b7b",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8eb2",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u523b\u610f",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u95ed\u4e0a\u773c",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62e5\u62b1\u7740",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u95f9",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8bf4\u80e1\u8bdd",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u72af\u7f6a",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6050\u5413",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62c5\u5fc3",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u75db\u82e6",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5fe4\u9006",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u544a\u72b6",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u592a\u7406",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5fcd\u53d7",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u79bb\u5f00",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5931\u58f0\u75db\u54ed",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8ffd\u8d76",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6295\u5165",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u9f8c\u9f8a",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6002\u607f",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62c6\u6389",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5486\u54ee",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62fc\u547d",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u60f3\u5230",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u7591",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8bf4\u4e0d\u51fa",
                        "symbolSize": 2,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u8c03\u67e5",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60f3\u50cf",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5efa\u8bae",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u75af\u72c2",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u73a9\u7b11",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u62a5\u6848",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u60ca\u53f9",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u9664",
                        "symbolSize": 1,
                        "draggable": "False",
                        "value": 1,
                        "category": "7",
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }
                    }
                ],
                "categories": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    },
                    {
                        "name": "4"
                    },
                    {
                        "name": "5"
                    },
                    {
                        "name": "6"
                    },
                    {
                        "name": "7"
                    }
                ],
                "edgeSymbol": [
                    null,
                    null
                ],
                "edgeSymbolSize": 10,
                "links": [
                    {
                        "source": "\u63d0\u5347",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u5b66\u4e60",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u8bb2\u8ff0",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u6cdb\u7ea2",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u9676\u9189",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u54c1\u5c1d",
                        "target": "\u5feb\u4e50"
                    },
                    {
                        "source": "\u671f\u5f85",
                        "target": "\u9ad8\u5174"
                    },
                    {
                        "source": "\u6d88\u8d39",
                        "target": "\u9ad8\u5174"
                    },
                    {
                        "source": "\u63d0\u4f9b",
                        "target": "\u9ad8\u5174"
                    },
                    {
                        "source": "\u8feb\u4e0d\u53ca\u5f85",
                        "target": "\u9ad8\u5174"
                    },
                    {
                        "source": "\u5408\u4f5c",
                        "target": "\u6b22\u4e50"
                    },
                    {
                        "source": "\u73a9\u800d",
                        "target": "\u6b22\u4e50"
                    },
                    {
                        "source": "\u5f00\u6000\u5927\u7b11",
                        "target": "\u6b22\u4e50"
                    },
                    {
                        "source": "\u611f\u8c22",
                        "target": "\u5f00\u5fc3"
                    },
                    {
                        "source": "\u4ecb\u7ecd",
                        "target": "\u5f00\u5fc3"
                    },
                    {
                        "source": "\u76f8\u62e5",
                        "target": "\u5f00\u5fc3"
                    },
                    {
                        "source": "\u5f00\u653e",
                        "target": "\u5f00\u5fc3"
                    },
                    {
                        "source": "\u5173\u6ce8",
                        "target": "\u6109\u5feb"
                    },
                    {
                        "source": "\u7b54\u5e94",
                        "target": "\u6109\u5feb"
                    },
                    {
                        "source": "\u5fd9\u788c",
                        "target": "\u6109\u5feb"
                    },
                    {
                        "source": "\u51c6\u5907",
                        "target": "\u6109\u5feb"
                    },
                    {
                        "source": "\u73a9\u800d",
                        "target": "\u6109\u5feb"
                    },
                    {
                        "source": "\u843d\u6cea",
                        "target": "\u96be\u8fc7"
                    },
                    {
                        "source": "\u79bb\u5a5a",
                        "target": "\u96be\u8fc7"
                    },
                    {
                        "source": "\u81ea\u6740",
                        "target": "\u96be\u8fc7"
                    },
                    {
                        "source": "\u6d41\u8fc7\u6cea",
                        "target": "\u96be\u8fc7"
                    },
                    {
                        "source": "\u5fc3\u75bc",
                        "target": "\u96be\u8fc7"
                    },
                    {
                        "source": "\u63a5\u53d7",
                        "target": "\u60b2\u4f24"
                    },
                    {
                        "source": "\u4e0d\u592a\u613f",
                        "target": "\u60b2\u4f24"
                    },
                    {
                        "source": "\u900f\u9732",
                        "target": "\u60b2\u4f24"
                    },
                    {
                        "source": "\u54ed\u6ce3",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u820d\u4e0d\u5f97",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u75db\u54ed",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u843d\u6cea",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u50f5\u786c",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u5591\u54d1",
                        "target": "\u4f24\u5fc3"
                    },
                    {
                        "source": "\u54ed\u6ce3",
                        "target": "\u60b2\u75db"
                    },
                    {
                        "source": "\u5927\u54ed",
                        "target": "\u60b2\u75db"
                    },
                    {
                        "source": "\u60bc\u5ff5",
                        "target": "\u60b2\u75db"
                    },
                    {
                        "source": "\u8fce\u63a5",
                        "target": "\u60b2\u75db"
                    },
                    {
                        "source": "\u8c34\u8d23",
                        "target": "\u75db\u5fc3"
                    },
                    {
                        "source": "\u63d0\u9192",
                        "target": "\u75db\u5fc3"
                    },
                    {
                        "source": "\u9009\u62e9",
                        "target": "\u75db\u5fc3"
                    },
                    {
                        "source": "\u6295\u8bc9",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u8981\u6c42",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u6b7b\u4ea1",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u538b\u529b",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u6307\u8d23",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u8bc4\u8bba",
                        "target": "\u6124\u6012"
                    },
                    {
                        "source": "\u8868\u793a",
                        "target": "\u751f\u6c14"
                    },
                    {
                        "source": "\u901a\u7ea2",
                        "target": "\u751f\u6c14"
                    },
                    {
                        "source": "\u5927\u58f0",
                        "target": "\u751f\u6c14"
                    },
                    {
                        "source": "\u8d76\u7d27",
                        "target": "\u751f\u6c14"
                    },
                    {
                        "source": "\u544a\u8bc9",
                        "target": "\u6c14\u6124"
                    },
                    {
                        "source": "\u8d28\u95ee",
                        "target": "\u6c14\u6124"
                    },
                    {
                        "source": "\u51fa\u6765",
                        "target": "\u6c14\u6124"
                    },
                    {
                        "source": "\u7528\u529b",
                        "target": "\u6c14\u6124"
                    },
                    {
                        "source": "\u4f4f\u624b",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u8bc1\u660e",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u5e0c\u671b",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u6307\u8d23",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u8f9e\u804c",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u72e0\u72e0",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u5927\u58f0",
                        "target": "\u607c\u706b"
                    },
                    {
                        "source": "\u62a5\u590d",
                        "target": "\u607c\u6012"
                    },
                    {
                        "source": "\u6307\u793a",
                        "target": "\u607c\u6012"
                    },
                    {
                        "source": "\u72af\u9519\u8bef",
                        "target": "\u607c\u6012"
                    },
                    {
                        "source": "\u4e0d\u6562",
                        "target": "\u607c\u6012"
                    },
                    {
                        "source": "\u6253\u6b7b",
                        "target": "\u607c\u6012"
                    },
                    {
                        "source": "\u4e0d\u6562",
                        "target": "\u5bb3\u6015"
                    },
                    {
                        "source": "\u8eb2",
                        "target": "\u5bb3\u6015"
                    },
                    {
                        "source": "\u523b\u610f",
                        "target": "\u5bb3\u6015"
                    },
                    {
                        "source": "\u95ed\u4e0a\u773c",
                        "target": "\u6050\u60e7"
                    },
                    {
                        "source": "\u62e5\u62b1\u7740",
                        "target": "\u6050\u60e7"
                    },
                    {
                        "source": "\u5927\u54ed",
                        "target": "\u6050\u60e7"
                    },
                    {
                        "source": "\u5927\u95f9",
                        "target": "\u6050\u60e7"
                    },
                    {
                        "source": "\u8bf4\u80e1\u8bdd",
                        "target": "\u6050\u60e7"
                    },
                    {
                        "source": "\u72af\u7f6a",
                        "target": "\u6050\u614c"
                    },
                    {
                        "source": "\u6050\u5413",
                        "target": "\u6050\u614c"
                    },
                    {
                        "source": "\u62c5\u5fc3",
                        "target": "\u6050\u614c"
                    },
                    {
                        "source": "\u75db\u82e6",
                        "target": "\u754f\u60e7"
                    },
                    {
                        "source": "\u4e0d\u6562",
                        "target": "\u754f\u60e7"
                    },
                    {
                        "source": "\u5fe4\u9006",
                        "target": "\u754f\u60e7"
                    },
                    {
                        "source": "\u544a\u72b6",
                        "target": "\u8ba8\u538c"
                    },
                    {
                        "source": "\u4e0d\u592a\u7406",
                        "target": "\u8ba8\u538c"
                    },
                    {
                        "source": "\u5fcd\u53d7",
                        "target": "\u8ba8\u538c"
                    },
                    {
                        "source": "\u79bb\u5f00",
                        "target": "\u8ba8\u538c"
                    },
                    {
                        "source": "\u5931\u58f0\u75db\u54ed",
                        "target": "\u8ba8\u538c"
                    },
                    {
                        "source": "\u8ffd\u8d76",
                        "target": "\u4ec7\u6068"
                    },
                    {
                        "source": "\u6295\u5165",
                        "target": "\u538c\u6076"
                    },
                    {
                        "source": "\u9f8c\u9f8a",
                        "target": "\u538c\u6076"
                    },
                    {
                        "source": "\u6002\u607f",
                        "target": "\u75db\u6068"
                    },
                    {
                        "source": "\u62c6\u6389",
                        "target": "\u75db\u6068"
                    },
                    {
                        "source": "\u5927\u58f0",
                        "target": "\u75db\u6068"
                    },
                    {
                        "source": "\u5486\u54ee",
                        "target": "\u75db\u6068"
                    },
                    {
                        "source": "\u62fc\u547d",
                        "target": "\u6028\u6068"
                    },
                    {
                        "source": "\u8f9e\u804c",
                        "target": "\u6028\u6068"
                    },
                    {
                        "source": "\u62a5\u590d",
                        "target": "\u6028\u6068"
                    },
                    {
                        "source": "\u4e0d\u6562",
                        "target": "\u60ca\u8bb6"
                    },
                    {
                        "source": "\u6ca1\u60f3\u5230",
                        "target": "\u60ca\u8bb6"
                    },
                    {
                        "source": "\u8d28\u7591",
                        "target": "\u60ca\u8bb6"
                    },
                    {
                        "source": "\u8bf4\u4e0d\u51fa",
                        "target": "\u9707\u60ca"
                    },
                    {
                        "source": "\u8c03\u67e5",
                        "target": "\u9707\u60ca"
                    },
                    {
                        "source": "\u60f3\u50cf",
                        "target": "\u9707\u60ca"
                    },
                    {
                        "source": "\u5927\u58f0",
                        "target": "\u5927\u5403\u4e00\u60ca"
                    },
                    {
                        "source": "\u5efa\u8bae",
                        "target": "\u5927\u5403\u4e00\u60ca"
                    },
                    {
                        "source": "\u75af\u72c2",
                        "target": "\u5927\u5403\u4e00\u60ca"
                    },
                    {
                        "source": "\u5f00\u73a9\u7b11",
                        "target": "\u5927\u5403\u4e00\u60ca"
                    },
                    {
                        "source": "\u62a5\u6848",
                        "target": "\u5927\u5403\u4e00\u60ca"
                    },
                    {
                        "source": "\u60ca\u53f9",
                        "target": "\u60ca\u5947"
                    },
                    {
                        "source": "\u5f00\u9664",
                        "target": "\u96be\u4ee5\u7f6e\u4fe1"
                    }
                ]
            }
        ],
        "legend": [
            {
                "data": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    },
                    {
                        "name": "4"
                    },
                    {
                        "name": "5"
                    },
                    {
                        "name": "6"
                    },
                    {
                        "name": "7"
                    }
                ],
                "selectedMode": "multiple",
                "show": false,
                "left": "center",
                "top": "top",
                "orient": "horizontal",
                "textStyle": {
                    "fontSize": 12,
                    "color": "#fff"
                }
            }
        ],
        "backgroundColor": "rgba(50,50,50,0.0)",
        "color": [
            "#fb7293",
            "#e7baf3",
            "#59d2c9",
            "#ff9f7f",
            "#2f89cf",
            "#ffdb5c",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597",
            "#f6f5ec"
        ]
    };
    myChart_b2bbc894965d41a2b8dccf4539d72613.setOption(option_b2bbc894965d41a2b8dccf4539d72613);

window.addEventListener('resize',function(){
myChart.resize();
});
})();

//方差图
(function(){
    var data = [
        [1,10],
        [2,80],
        [3,59],
        [4,203],
        [5,88],
        [6,127],
        [7,116],
        [8,104],
        [9,114],
        [10,75],
        [11,77],
        [12,67],
        [13,46],
        [14,51],
        [15,32],
        [16,46],
        [17,31],
        [18,35],
        [19,36],
        [20,31],
        [21,38],
        [22,25],
        [23,26],
        [24,20],
        [25,16],
        [26,12],
        [27,14],
        [28,9],
        [29,13],
        [30,18],
        [31,14],
        [32,8],
        [33,7],
        [34,15],
        [35,9],
        [36,5],
        [37,6],
        [38,7],
        [39,4],
        [40,6],
        [41,9],
        [42,5],
        [43,6],
        [44,5],
        [45,1],
        [46,1],
        [47,1],
        [48,9],
        [49,2],
        [52,2],
        [54,2],
        [53,2],
        [56,2],
        [58,1],
        [59,1],
        [60,2],
        [63,1],
        [64,2],
        [65,1],
        [67,1],
        [68,1],
        [69,1],
        [72,2],
        [75,3],
        [82,1],
        [86,2],
        [103,1],
        [113,1],
        [131,1]];
    var myChart = echarts.init(document.querySelector(".bar .chart11"));

    var option = {
        title: {
            text: '情感行为长度',
            subtext: '字符',
            left: 'center',
            top:'3%',
            textStyle: {
                color : '#fff',
            },
        },
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //     type: 'cross'
            // }
        },
        color: ['#ffdb5c'],
        xAxis: {
            min: 0,
            max: 135,
            type: 'value',
            //axisLine: {onZero: false},
            axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.8)",
                }
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              }
        },
        yAxis: {
            min: 0,
            max: 210,
            type: 'value',
            //axisLine: {onZero: false},
            axisLabel:{
                color:"white",
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.8)",
                      fontSize: "12"
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      // width: 1,
                      // type: "solid"
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
        },
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'empty',
                start: 0,
                end: 20,
                height: '10%',
            },
        ],
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                data: data,
                areaStyle: {
                    color : 'rgba(255,219,92,.6)',
                },
            }
        ]
    };
myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();


(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart12"));
    var xAxisData = ['快乐', '难过', '愤怒', '害怕', '讨厌', '惊讶'];
    var data1 = [336,319,518,66,189,226];
    var data2 = [-82,-58,-137,-17,-45,-75];
    
    option = {
        legend: {
            data: ['语料总数', '标注错误数量'],
        },
                tooltip: {
                trigger: 'axis',
                axisPointer: { 
                    type: 'shadow'  
                }
            },
        xAxis: {
            data: xAxisData,
        },
        yAxis: [{
            name: '句子数量',
        },
            {
                name: '准确率%',
                min:0,
                max:100,
                type: 'value',
                splitLine: {
                show: false
            }
            }
        ],
        series: [
            {
                name: '语料总数',
                type: 'bar',
                stack: 'one',
                data: data1
            },
            {
                name: '标注错误数量',
                type: 'bar',
                stack: 'one',
                data: data2
            },
            {
                name:'准确率%',
            yAxisIndex: 1,
            data: [75.60,81.82,73.55,74.24,76.19,66.81],
            type: 'line'
        }
        ]
    };   

myChart.setOption(option);

window.addEventListener('resize',function(){
myChart.resize();
});
})();