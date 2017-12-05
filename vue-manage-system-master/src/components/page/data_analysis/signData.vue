<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">签到数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">签到对比分析</p>
            <div class="ms-doc_main">
                <el-date-picker
                    v-model="dateValue1"
                    type="month"
                    placeholder="选择月">
                </el-date-picker>
                <div class="ms-doc_chart" style="font-size: 0;">
                    <p class="title">月签到对比分析</p>
                    <div class="TwoTab" id="main">

                    </div>
                    <ul class="pie_des bar_des">
                        <li><i style="background-color:#009efb; "></i>第一周</li>
                        <li><i style="background-color: #55ce63;"></i>第二周</li>
                        <li><i style="background-color: #fff45c;"></i>第三周</li>
                        <li><i style="background-color: #ffa55c;"></i>第四周</li>
                        <li><i style="background-color: #ff5b6b;"></i>第五周</li>
                    </ul>
                </div>
            </div>
            <div  class="ms-doc_main">
                <div class="date_select">
                    <el-date-picker
                        v-model="dateValue2"
                        type="month"
                        placeholder="选择月">
                    </el-date-picker>
                    <span class="lead_out"><img src="/static/img/lead_out.png" alt="">导出当前结果</span>
                </div>
                <table>
                    <tr>
                        <th></th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                        <th>总计</th>
                    </tr>
                    <tr>
                        <th>第一周</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>第二周</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>第三周</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>第四周</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>第五周</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>总计</th>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>

                </table>
            </div>
        </div>
        <div class="sort">
            <p class="m_title">签到分布分析</p>
            <div class="ms-doc_main">
                <el-date-picker
                    v-model="dateValue3"
                    type="month"
                    placeholder="选择月">
                </el-date-picker>
                <div class="ms-doc_chart" style="width: 100%;font-size: 0;">
                    <p class="title">月签到数据分析</p>
                    <div id="roundOne">
                    </div>
                    <div style="width: 30%;float: right;margin: 50px 0;">
                        <ul class="pie_des">
                            <li><i style="background-color:#009efb; "></i>第一周</li>
                            <li><i style="background-color: #ff5b6b;"></i>第二周</li>
                            <li><i style="background-color: #ffa55c;"></i>第三周</li>
                            <li><i style="background-color: #fff45c;"></i>第四周</li>
                            <li><i style="background-color: #55ce63;"></i>第五周</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let echarts = require('echarts');
    export default {
        components: {},
        data() {
            return {
                dateValue1: '',
                dateValue2: '',
                dateValue3: '',
                goodsDataList: [],
                tableData3: [
                    {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }, {
                        number: '200',
                        title: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        percent: '0.3'
                    }]
            }
        },
        methods: {
            //      获取商品类目数据
            getGoodsList: function () {
                this.$ajax({
                    method: 'POST',
                    url: '/api/Goodsdata/productTypeData'
                }).then((res) => {
                    if (res.data.code == '200') {
                        this.goodsDataList = res.data.data.more_data
                        console.log(this.goodsDataList)
//          console.log(imgList)
                    }
                }, (err) => {
                    console.log(err)
                })
            },
        },
        mounted() {
            var myChart = echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                title: {text: ''},
                tooltip: {},
                xAxis: {
                    data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
                },
                yAxis: {},
                series: [
                    {
                    name: '',
                    type: 'bar',
                    data: [5, 20, 36, 10, 11, 30, 30],
                    itemStyle: {
                        normal: {
                            color: '#0091fb',
                        }
                    },
                    barWidth: '15',
                },
                    {
                        name: '',
                        type: 'bar',
                        data: [5, 20, 36, 10, 11, 30, 30],
                        itemStyle: {
                            normal: {
                                color: '#55ce63',
                            }
                        },
                        barWidth: '15',
                    },
                    {
                        name: '',
                        type: 'bar',
                        data: [5, 20, 36, 10, 11, 30, 30],
                        itemStyle: {
                            normal: {
                                color: '#fff45c',
                            }
                        },
                        barWidth: '15',
                    },
                    {
                        name: '',
                        type: 'bar',
                        data: [5, 20, 36, 10, 11, 30, 30],
                        itemStyle: {
                            normal: {
                                color: '#ffa55c',
                            }
                        },
                        barWidth: '15',
                    },
                    {
                        name: '',
                        type: 'bar',
                        data: [5, 20, 36, 10, 11, 30, 30],
                        itemStyle: {
                            normal: {
                                color: '#ff5b6b',
                            }
                        },
                        barWidth: '15',
                    }
                ]
            });
            var RoundOne = echarts.init(document.getElementById('roundOne'));
            RoundOne.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#009efb', '#ff5b6b', '#ffa55c', '#fff45c', '#55ce63'],
                graphic: {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: "总计/次\n8888",
                        textAlign: 'center',
                        fill: '#000',
                        width: 30,
                        height: 30,
                        fontSize: '18'
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['150', '80',],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                }
                            }
                        },
                        data: [
                            {value: 335, name: '第一周'},
                            {value: 1310, name: '第二周'},
                            {value: 1310, name: '第三周'},
                            {value: 335, name: '第四周'},
                            {value: 1310, name: '第五周'}

                        ]
                    }
                ]
            });
            // 自适应
            window.onresize = function () {
                myChart.resize();
                RoundOne.resize();
            }
        },
        created: function () {
            //            获取当前年月日
            var date=new Date;
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            this.dateValue1=year+'-'+month
            this.dateValue2=year+'-'+month
//            this.getGoodsList()
//            this.getGoodsList2(this.dateValue2)
        }
    }
</script>

<style scoped>
    .TwoTab {
        width: 100%;
        height: 400px;
        background-color: white;
        overflow: hidden;
        display: inline-block;
    }
    .ms-doc, .sort {
        width: 100%;
        /*max-width: 980px;*/
        max-width: 1300px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        background-color: white;
        padding: 0 40px;
        color: #54667a;
    }
    .sort {
        margin: 20px 0 54px;
    }
    .m_title {
        font-size: 20px;
        color: #54667a;
        line-height: 60px;
        border-bottom: 1px solid #e9f1f3;
    }
    .ms-doc_main {
        padding: 20px;
    }
    .ms-doc_chart {
        border: 1px solid #e9f1f3;
        margin: 16px 0;
    }
    .title {
        font-size: 18px;
        border-left: 4px solid #abbbc2;
        padding-left: 20px;
        margin-left: 24px;
        margin-top: 22px;
        line-height: 18px;
    }
    #roundOne {
        width: 70%;
        height: 335px;
        padding: 50px 0;
        display: inline-block;
    }
    .pie_des{
        list-style: none;
        font-size: 16px;
        color: #54667a;
    }
    .pie_des li{
        line-height: 50px;
    }
    .pie_des i{
        width: 10px;
        height: 10px;
        margin-right: 20px;
        display: inline-block;
    }
    .bar_des{
        text-align: center;
    }
    .bar_des li{
        display: inline-block;
        margin-right: 20px;
    }
    .date_select{
        position: relative;
    }
    .lead_out{
        position: absolute;right: 50px;top: 6px;font-size: 14px;color: #54667a;
    }
    .lead_out img{
        margin:0 10px -3px 0;width: 16px;height: 18px;
    }
    table,th,td{
        border: 1px solid #e9f1f3;
       border-collapse: collapse;
    }
    table{
        width: 100%;
        margin-bottom: 40px;
        margin-top:16px;
    }
    th,td{
        text-align: center;
        width: calc(100%/9);
        height: 50px;
    }
</style>
