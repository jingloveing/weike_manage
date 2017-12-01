<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">签到管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">本周签到</p>
            <div class="ms-doc_main">
                <div class="date_select">
                    <el-date-picker
                        v-model="dateValue1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="ms-doc_chart" style="font-size: 0;">
                    <p class="title">本周签到趋势图</p>
                    <div class="CTwoLeft" id="broken1">

                    </div>
                    <p class="pie_title" ><i style="background-color: #55ce63;"></i>每天签到次数</p>
                </div>
            </div>
        </div>
        <div class="ms-doc sort">
            <p class="m_title">签到积分设置</p>
            <div class="ms-doc_main">
                <p> 用户单次签到奖励积分设置</p>
                <el-input v-model="input" style="width: 200px;margin:20px 20px 20px 0;" placeholder="请输入最低积分"></el-input>
                <p>用户连续签到积分奖励提升区间设置</p>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入首次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第二次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第三次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第四次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第五次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第六次奖励数"></el-input>
                <el-input v-model="input" style="width: 180px;margin:20px 50px 0 0;" placeholder="请输入第七次奖励数"></el-input>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;margin-bottom: 50px;">确认</el-button>
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
                goodsDataList: []
            }
        },
        methods: {
//            //      获取商品类目数据
//            getGoodsList: function () {
//                this.$ajax({
//                    method: 'POST',
//                    url: '/api/Goodsdata/productTypeData'
//                }).then((res) => {
//                    if (res.data.code == '200') {
//                        this.goodsDataList = res.data.data.more_data
//                        console.log(this.goodsDataList)
////          console.log(imgList)
//                    }
//                }, (err) => {
//                    console.log(err)
//                })
//            },
        },
        mounted() {
            var Broken1 = echarts.init(document.getElementById('broken1'));
            Broken1.setOption({
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                        axisLine:{
                            //横坐标横线样式
                            lineStyle:{
                                type:'dotted',
                                color:'#bac7cd'
                            }
                        },
                        axisLabel:{
                            textStyle:{
                                color:'#bac7cd' //横坐标字体颜色
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine:{
                            //横坐标横线样式
                            lineStyle:{
                                type:'dotted',
                                color:'#bac7cd'
                            }
                        },
                        axisLabel:{
                            formatter: '{value}',
                            textStyle:{
                                color:'#bac7cd' //横坐标字体颜色
                            }
                        }
                    }
                ],
                series: [
                    {
                        smooth:false,
                        name: '收入',
                        type: 'line',
                        data: ['111','11', '12', '13', '14', '15','20'],
//                        markPoint: {
//                            data: [
//                                { type: 'max', name: '最大值' },
//                                { type: 'min', name: '最小值' }
//                            ]
//                        },
//                        markLine: {
//                            data: [
//                                { type: 'average', name: '平均值' }
//                            ]
//                        },
                        itemStyle:{
                            normal:{
                                color:'#55ce63',//图标颜色
                                lineStyle:{
                                    color:'#55ce63'//连线颜色
                                }
                            }
                        }
                    }
                ]
            });
            // 自适应
            window.onresize = function () {
                Broken1.resize();
            }
        },
        created: function () {

        }
    }
</script>

<style scoped>
    .CTwoLeft {
        width: 100%;
        height: 400px;
        background-color: white;
        overflow: hidden;
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
    .date_select{
        position: relative;
    }
    .pie_title{
        text-align: center;font-size: 18px;margin-bottom: 30px;
    }
    .pie_title i{
        margin-right: 20px; display: inline-block;width: 10px;height: 10px;border-radius: 50%;
    }
</style>
