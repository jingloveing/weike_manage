<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <div class="date_select">
              <p>总数据</p>
              <a class="lead_out" :href="'/api/Summarydata/export?type='+type+'&day_type='+date_type" style="top: 20px;"><img src="/static/img/lead_out.png" alt="">导出当前结果</a>
            </div>
                <div class="ms-doc_main">
                <ul class="tab" id="tab1">
                    <li class="active">访问数据</li>
                    <li>用户数据</li>
                    <li>搜索数据</li>
                    <li>元宝消耗</li>
                </ul>
                <div class="ms-doc_chart" style="font-size: 0;">
                       <div style="width: 70%;display: inline-block;">
                           <ul class="schart_tab schart_tab1" id="tab2">
                               <li class="active">昨日</li>
                               <li>周</li>
                               <li>月</li>
                           </ul>
                           <div class="CTwoLeft" id="broken">

                           </div>
                       </div>
                    <div style="float: right;width: 30%;" v-show="isShow">
                            <div id="roundOne">
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sort">
            <p>数据排序</p>
            <div style="display: flex;justify-content: space-around;padding-bottom: 40px;">
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">热门商品TOP30</p>
                    <el-table
                        :data="list1"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            label="商品">
                            <template slot-scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <img :src="scope.row.pict_url" width="36" height="36" style="vertical-align: middle;"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="number"
                            label="点击量">
                        </el-table-column>
                        <el-table-column
                            prop="title"
                            label="标题" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">新增用户TOP20</p>
                    <el-table
                        :data="list2"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="头像">
                            <template slot-scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <img :src="scope.row.wechat_head_image" width="36" height="36" style="vertical-align: middle;"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="wechat_nickname"
                            label="昵称" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="create_time"
                            label="加入时间" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="width: 30%;">
                    <p style="text-align: center;font-size: 18px;color: #54667a;">热搜词TOP20</p>
                    <el-table
                        :data="list3"
                        height="520"
                        border
                        style="width: 100%">
                        <el-table-column
                            label="关键词" show-overflow-tooltip>
                            <!--<span style="margin-right: 5px;">1</span>-->
                            <template slot-scope="scope">
                                <span style="vertical-align: middle;margin-right: 5px;">{{scope.$index+1}}</span>
                                <span>{{scope.row.keywords}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="number"
                            label="搜索量" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let echarts = require('echarts');
    export default {
        components: {
        },
        data(){
            return{
                list1: [],
                list2:[],
                list3: [],
                type:'1',
                date_type:'1',
                title:'',
                isShow:false,
                arr:[],
                total_count:'',
                time:[],
                counts:[],
                subtext:'人'
            }
        },
        mounted(){
//            js  Tab选项卡
            var tab1 = document.getElementById("tab1").getElementsByTagName("li")
            var tab2 = document.getElementById("tab2").getElementsByTagName("li")
            for (var i = 0; i < tab1.length; i++) {
                let self = this
                tab1[i].index=i
                tab1[i].onclick = function () {
                    for(var j=0;j<tab1.length;j++){
                        tab1[j].className=''
                    }
                    tab1[this.index].className='active'
                    self.type=this.index+1
                    self.getData()
                }
            }
            for (var i = 0; i < tab2.length; i++) {
                let self = this
                tab2[i].index=i
                tab2[i].onclick = function () {
                    for(var j=0;j<tab2.length;j++){
                        tab2[j].className=''
                    }
                    tab2[this.index].className='active'
                    self.date_type=this.index+1
                    if(self.date_type==1){
                        self.isShow=false
                    }else{
                        self.isShow=true
                    }
                    self.getData()
                }
            }
            var Broken = echarts.init(document.getElementById('broken'));
            Broken.setOption({
                title: {
                    subtext: '单位：'+this.subtext,
                    subtextStyle:{
                        color:"#666666",
                        fontSize:'20px',

                    }
                },
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.time,
                        axisLine:{
                            //横坐标横线样式
                            lineStyle:{
//                                type:'dotted',
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
//                                type:'dotted',
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
                        name: this.title,
                        type: 'line',
                        data: this.counts ,
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
//            if(this.date_type!==1){
//                            console.log('aaa')
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
                            text:"总计\n"+this.total_count,
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
                            data: this.arr
                        }
                    ]
                });
//            }else{
//
//            }
            // 自适应
            window.onresize = function () {
                Broken.resize();
                RoundOne.resize();
            }
        },
        methods:{
            //      首页数据
            getData:function(){
                if(this.type=='1'){
                    this.title='访问人数'
                    this.subtext='人'
                }else if(this.type=='2'){
                    this.subtext='人'
                    this.title='新增用户'
                }else if(this.type=='3'){
                    this.title='搜索次数'
                    this.subtext='次'
                }else{
                    this.title='元宝消耗量'
                    this.subtext='个'
                }
                this.$ajax.post('/api/Summarydata/summaryData',{type:this.type,date_type:this.date_type}).then((res) => {
                    if (res.data.code == '200') {
                        this.time = res.data.data.time;
                        this.counts = res.data.data.count;
//                        console.log(this.counts)
                        this.total_count=res.data.data.total_count;
                        var arr=[]
                        for(var i= 0;i<this.time.length;i++){
                            arr.push({value:this.counts[i],name:this.time[i]});
                        }
//                        this.arr = JSON.stringify(arr)
                        this.arr = arr
//                        console.log(this.arr)
                        var Broken = echarts.init(document.getElementById('broken'));
                        Broken.setOption({
                            title: {
                                subtext: '单位：'+this.subtext
                            },
                            backgroundColor: '#fff',
                            tooltip: {
                                trigger: 'axis'
                            },
                            calculable: true,
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: this.time,
                                    axisLine:{
                                        //横坐标横线样式
                                        lineStyle:{
//                                type:'dotted',
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
//                                type:'dotted',
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
                                    name: this.title,
                                    type: 'line',
                                    data: this.counts ,
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
                        if(this.date_type!==1){
//                            console.log('aaa')
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
                                        text:"总计\n"+this.total_count,
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
                                        data: this.arr
                                    }
                                ]
                            });
                        }else{

                        }
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取热门商品top30
            getList1:function(){
                this.$ajax.post('/api/Summarydata/productTop30').then((res) => {
                    if (res.data.code == '200') {
                        this.list1 = res.data.data.product_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      新增用户top20
            getList2:function(){
                this.$ajax.post('/api/Summarydata/newMemberTop20').then((res) => {
                    if (res.data.code == '200') {
                        this.list2 = res.data.data.member_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      热搜词top20
            getList3:function(){
                this.$ajax.post('/api/Summarydata/hotWordsTop20').then((res) => {
                    if (res.data.code == '200') {
                        this.list3 = res.data.data.words_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
        },
        created:function(){
           this.getList1()
            this.getList2()
            this.getList3()
            this.getData()
        }
    }

</script>

<style scoped>
    .CTwoLeft{width: 100%;height: 335px;background-color: white;overflow: hidden;
    margin-left: 20px;
    }
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
        max-width: 980px;
        /*max-width: 1300px;*/
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
    .active{
        background-color: #f2f7f8;
    }
</style>
