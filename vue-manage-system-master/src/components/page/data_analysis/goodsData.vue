<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">商品数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">商品浏览量统计</p>
            <div class="ms-doc_main">
                <el-date-picker
                    v-model="dateValue1"
                    type="month"
                    placeholder="选择月">
                </el-date-picker>
                <div class="ms-doc_chart" style="font-size: 0;">
                    <p class="title">每月商品类目浏览量TOP10</p>
                    <div class="TwoTab" id="main">

                    </div>
                    <div style="width: 30%;display: inline-block;">
                        <p style="font-size: 18px;color: #54667a;border-bottom: 1px solid #e9f1f3;display: block;width: 110px;margin: 0 auto 10px;padding-bottom: 10px;">
                            详细数据</p>
                        <el-table
                            :data="tableData3"
                            border
                            style="width: 250px;margin: 0 auto 30px;">
                            <el-table-column
                                label="名称" show-overflow-tooltip style="width: 200px;">
                                <template scope="scope">
                                    <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index + 1}}</span>
                                    <span>{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="浏览量" show-overflow-tooltip>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="sort">
            <p class="m_title">商品取调量统计</p>
            <div class="ms-doc_main">
                <el-date-picker
                    v-model="dateValue2"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <div class="ms-doc_chart" style="width: 100%;font-size: 0;">
                    <p class="title">TOP10商品取调统计分析</p>
                    <div id="roundOne">
                    </div>
                    <div style="width: 40%;display: inline-block;height: 435px;">
                        <p style="font-size: 18px;color: #54667a;border-bottom: 1px solid #e9f1f3;display: block;width: 110px;margin: 0 auto 10px;padding-bottom: 10px;">
                            详细数据</p>
                        <el-table
                            :data="tableData3"
                            border
                            style="width: 358px;margin: 0 auto;">
                            <el-table-column
                                label="类别" show-overflow-tooltip>
                                <template scope="scope">
                                    <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index + 1}}</span>
                                    <span>{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="数量" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="percent"
                                label="百分比" show-overflow-tooltip>
                            </el-table-column>
                        </el-table>
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
                    data: ["七日下单数", "待付款", "待发货", "维权订单", "七日收入", "衣服", "鞋子", "包包", "手机", "玩具用品"]
                },
                yAxis: {},
                series: [{
                    name: '',
                    type: 'bar',
                    data: [5, 20, 36, 10, 11, 30, 30, 23, 45, 345],
                    itemStyle: {
                        normal: {
                            color: '#ff5d6d',
                        }
                    },
                    barWidth: '40',
                }]
            });
            var RoundOne = echarts.init(document.getElementById('roundOne'));
            RoundOne.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['#009efb', '#ff5b6d', '#ffa55c', '#fff45c', '#55ce63', '#6a5bff', '#1badcb', '#ff8994', '#272828', '#afbec5', '#efbec5', '#eff3f6', '#0f8edd'],
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
                        radius: ['150', '120',],
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
                            {value: 1310, name: '第五周'},
                            {value: 1310, name: '第六周'},
                            {value: 1310, name: '第七周'}

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
            this.getGoodsList()
        }
    }
</script>

<style scoped>
    .TwoTab {
        width: 70%;
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

    .list_r1 {
        height: 100%;
        font-size: 16px;
        color: #525c65;
        margin: 40px 80px 0;
        display: block;
    }

    .list_r1 td {
        line-height: 25px;
    }

    .list_r1 td {
        display: inline-block;
    }

    .list_r1 tr td:nth-child(odd) {
        width: 60%;
    }

    .list_r1 tr td:nth-child(even) {
        width: 40%;
        text-align: right;
    }

    .list_r1 caption {
        font-size: 18px;
        color: #54667a;
        padding: 0 80px;
    }

    .top {
        color: #ff5b6b;
    }

    #roundOne {
        width: 60%;
        height: 335px;
        padding: 50px 0;
        display: inline-block;
    }
</style>
