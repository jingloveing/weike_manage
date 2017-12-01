<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="notice" v-show="isShow">
            <img src="/static/img/top_triangle.png" alt="" style="position: absolute;top: -7px;right: 38px;">
            <p><i class="round"></i> 兑换商城有一份新订单等待发货哈哈哈哈哈啊哈哈哈哈哈</p>
            <img src="/static/img/close_btn.png" alt="" style="width: 10px;height: 10px;position: absolute;top:5px;right: 5px;" @click="close()">
        </div>
        <div class="ms-doc">
           <p>总数据</p>
            <div class="ms-doc_main">
                <ul class="tab">
                    <li>访问数据</li>
                    <li>用户数据</li>
                    <li>搜索数据</li>
                    <li>元宝消耗</li>
                </ul>
                <div class="ms-doc_chart" style="font-size: 0;">
                       <div style="width: 70%;display: inline-block;">
                           <ul class="schart_tab schart_tab1">
                               <li>昨日</li>
                               <li>周</li>
                               <li>月</li>
                           </ul>
                           <div class="CTwoLeft" id="broken">

                           </div>
                       </div>
                    <div style="float: right;width: 30%;">
                        <ul class="schart_tab schart_tab2">
                            <li>周</li>
                            <li>月</li>
                        </ul>
                            <div id="roundOne">
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sort">
            <p>数据排序</p>
            <div style="display: flex;justify-content: space-around;">
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">热门商品TOP30</p>
                    <el-table
                        :data="tableData1"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            label="商品">
                            <template scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <img :src="scope.row.image" width="36" height="36" style="vertical-align: middle;"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="点击量">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="标题" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">新增用户TOP20</p>
                    <el-table
                        :data="tableData2"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="头像">
                            <template scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <img :src="scope.row.image" width="36" height="36" style="vertical-align: middle;"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="昵称" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="加入时间" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">热搜词TOP20</p>
                    <el-table
                        :data="tableData3"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            label="关键词" show-overflow-tooltip>
                            <!--<span style="margin-right: 5px;">1</span>-->
                            <template scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <span>{{scope.row.name}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="搜索量" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    let echarts = require('echarts');
    export default {
        components: {
            Schart
        },
        data(){
            return{
                isShow:true,
                tableData1: [{
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                tableData2: [{
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        mounted(){
            var Broken = echarts.init(document.getElementById('broken'));
            Broken.setOption({
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
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
                        data: ['111','11', '12', '13', '14', '15', '16', '17', '18', '519', '320', '21', '122', '23', '224', '25', '26'],
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
            var RoundOne = echarts.init(document.getElementById('roundOne'));
            RoundOne.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color:['#009efb', '#ff5b6d','#ffa55c','#fff45c','#55ce63','#6a5bff','#1badcb'],
                graphic:{
                    type:'text',
                    left:'center',
                    top:'center',
                    style:{
                        text:"总计\n8888",
                        textAlign:'center',
                        fill:'#000',
                        width:30,
                        height:30,
                        fontSize:'18'
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['100', '50',],
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
                            { value: 335, name: '第一周' },
                            { value: 1310, name: '第二周' },
                            { value: 1310, name: '第三周' },
                            { value: 335, name: '第四周' },
                            { value: 1310, name: '第五周' },
                            { value: 1310, name: '第六周' },
                            { value: 1310, name: '第七周' }

                        ]
                    }
                ]
            });
            // 自适应
            window.onresize = function () {
                Broken.resize();
                RoundOne.resize();
            }
        },
        methods:{
            close(){
                this.isShow=false
            }
        }
    }
</script>

<style scoped>
    .CTwoLeft{width: 100%;height: 335px;background-color: white;overflow: hidden;}
    #roundOne{
        width: 280px;
        /*float: right;*/
        height: 335px;
    }
    /*.pie_des{*/
        /*width: 100%;*/
        /*text-align: center;*/
    /*}*/
    /*.pie_des li{*/
        /*list-style: none;*/
        /*float: left;*/
        /*font-size: 14px;*/
        /*color: #54667a;*/
        /*padding: 0 20px;*/
    /*}*/
    .ms-doc,.sort{
        width:100%;
        /*max-width: 980px;*/
        max-width: 1300px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        background-color: white;
        padding: 0 40px;
        color: #54667a;
    }
    .sort{
        margin:20px 0 54px;
    }
    .ms-doc p,.sort p{
        font-size: 20px;
        color: #54667a;
        line-height: 60px;
        border-bottom: 1px solid #e9f1f3;
    }
    .ms-doc_main{
        padding: 20px;
    }
    .tab:after,.schart_tab:after{
        content: '';
        display: table;
        clear: both;
    }
    .tab{
        border: 1px solid #e9f1f3;
        font-size: 14px;
        vertical-align: middle;
        line-height: 40px;
        width: 520px;
    }
    .tab li,.schart_tab li{
        list-style: none;
        float: left;
        text-align: center;
    }
    .tab li{
        width: 25%;
    }
    .schart_tab1 li{
        width: calc(100%/3);
    }
    .schart_tab2 li{
        width: calc(100%/2);
    }
    .tab li:nth-child(even),.schart_tab li:nth-child(even){
        border-left: 1px solid #e9f1f3;
        border-right: 1px solid #e9f1f3;
        box-sizing: border-box;
    }
    .schart_tab{
        border: 1px solid #e9f1f3;
        font-size: 14px;
        vertical-align: middle;
        line-height: 24px;
        margin:16px 0 0 24px;
    }
    .schart_tab1{
        width: 156px;
    }
    .schart_tab2{
        width: 104px;
    }
    .ms-doc_chart{
        border:1px solid #e9f1f3;
        margin:16px 0;
    }
    .round{
        margin:0 10px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #fc4b6c;
        border-radius: 50%;
    }
    .notice{
        width: 300px;
        line-height: 60px;
        padding:0px 20px;
        right: 180px;
        position: fixed;
        top:72px;
        background-color: white;
        border: 1px solid #e9f1f3;
        z-index: 10000;
        font-size: 12px;
    }
    .notice p{
        color: #54667a;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
