<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">晒单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">晒单审核</p>
            <div class="ms-doc_main">
                <div>
                    <span>下单时间：</span>
                    <el-date-picker
                        v-model="start"
                        type="date"
                        placeholder="开始日期"
                        :picker-options="pickerOptions0" @change="changeDate1" value-format="yyyy-MM-dd">
                    </el-date-picker>
                    <el-date-picker
                        v-model="end"
                        type="date"
                        placeholder="结束日期"
                        :picker-options="pickerOptions1" @change="changeDate2" value-format="yyyy-MM-dd">
                    </el-date-picker>
                    <el-select v-model="is_square" placeholder="晒单状态"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="status" placeholder="状态"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;">筛选</el-button>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="order_list"
                    tooltip-effect="dark"
                    style="width: 100%;text-align: center;margin: 20px 0;"
                    border
                    height="480"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                        type="selection"
                        width="50" height="95">
                    </el-table-column>
                    <el-table-column
                        label="晒单截图" height="95">
                        <template slot-scope="scope">
                            <img :src="scope.row.evaluate_url" alt="" style="width:76px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="留言"
                        width="200"
                        show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.evaluate_detail }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="wechat_nickname"
                        label="账号ID">
                    </el-table-column>
                    <el-table-column
                        prop="create_time"
                        label="时间"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="order_num"
                        label="订单号"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="examine_status"
                        label="晒单状态"
                        show-overflow-tooltip>
                        <!--<template slot-scope="scope">-->
                            <!--<span></span>-->
                        <!--</template>-->
                    </el-table-column>
                    <el-table-column
                        prop="express_status"
                        label="状态"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        label="操作" inline-template width="180">
                        <!--/奖励。。。未奖励   通过。。。不通过-->
                        <template>
                            <el-button type="text" @click="toShow()" style="color: #0f8edd;display: block;margin: 0 auto;">晒单详情</el-button>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">已奖励</span>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">不通过</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-select v-model="value1" placeholder="晒单状态"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="奖励"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;" >确认</el-button>
                </div>
            </div>
        </div>
        <div class="ms-doc sort">
            <p class="m_title">晒单设置</p>
            <div class="ms-doc_main">
                <div>
                    <span style="display: inline-block;width: 200px;text-align: right;">用户晒单返元宝数值设定</span>
                    <el-input v-model="acer" placeholder="请输入数值" style="width: 400px;margin:0 20px;"></el-input>元宝/单
                </div>
                <div style="margin: 30px 0;">
                    <span style="display: inline-block;width: 200px;text-align: right;float: left;">晒单规则说明</span>
                    <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="brief" style="width: 400px;margin:0 23px;">
                    </el-input>
                </div>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="saveSet()">保存</el-button>

                </div>
            </div>
        </div>
        <!--模态框-->
        <el-dialog title="晒单详情" :visible.sync="dialogTableVisible">
            <div class="model_content">
                <p class="title">昵称 <span class="date">2017-11-03</span></p>
                <p class="des">留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容</p>
                <p class="title">晒单截图</p>
                <div class="imgList">
                    <img src="/static/img/upload_img_bd.png" alt="">
                    <img src="/static/img/upload_img_bd.png" alt="">
                    <img src="/static/img/upload_img_bd.png" alt="">
                    <img src="/static/img/upload_img_bd.png" alt="">
                    <img src="/static/img/upload_img_bd.png" alt="">
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                start: '',
                end: '',
                orderList:[],
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.value2 != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.value2;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.value1 || time.getTime() > Date.now();
                    }
                },
                dialogTableVisible: false,
                options1: [{
                    value: '',
                    label: '全部'
                },
                    {
                        value: '1',
                        label: '广场中'
                    },{
                        value: '2',
                        label: '未展示'
                    }
                ],
                is_square:'',
                options2: [
                    {
                    value: '',
                    label: '全部'
                },{
                    value: '1',
                    label: '已奖励'
                }, {
                    value: '2',
                    label: '未审核'
                }, {
                    value: '3',
                    label: '未通过'
                }
                ],
                 status:'',
                options3: [
                    {
                    value: '选项1',
                    label: '晒单状态处理'
                }, {
                    value: '选项3',
                    label: '加入广场'
                }, {
                    value: '选项3',
                    label: '撤出广场'
                }
                ],
                value3:'晒单状态处理',
                options4: [{
                    value: '选项1',
                    label: '审核状态处理'
                }, {
                    value: '选项3',
                    label: '奖励'
                }, {
                    value: '选项3',
                    label: '不通过'
                }
                ],
                value4:'审核状态处理',
                dateValue1:'',
                tableData3: [
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    }
                ],
                share_id: [],
                acer:'',
                brief:'',
            }
        },
        methods: {
            //      获取晒单审核列表
            getOrderList: function () {
                this.$ajax.post('/api/Shareorder/getOrderList',).then((res) => {
                    if (res.data.code == '200') {
                        this.orderList=res.data.data.order_list
                        this.start = res.data.data.start
                        this.end = res.data.data.end
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取默认晒单设置
            getSet: function () {
                this.$ajax.get('/api/Shareorder/setShareConfig',).then((res) => {
                    if (res.data.code == '200') {
                        this.acer=res.data.data.acer
                        this.brief = res.data.data.brief
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //     修改晒单设置
            saveSet: function () {
                this.$ajax.post('/api/Shareorder/setShareConfig',{acer:this.acer,brief:this.brief}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.getSet()
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            changeDate1(e) {
                this.start = e
            },
            changeDate2(e) {
                this.end = e
            },
            handleSelectionChange(val) {
                var data = []
                for (var i = 0; i < val.length; i++) {
                    data.push(val[i].order_id);
                }
                this.share_id = data;
            },
            toShow(){
                this.dialogTableVisible = true

            }
        },
        mounted() {


        },
        created: function () {
          this.getSet()
            this.getOrderList()
        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        /*max-width: 980px;*/
        max-width: 1300px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        background-color: white;
        padding: 0 40px;
        color: #54667a;
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
    .sort{
        margin:20px 0 54px;
    }
    .title{
        font-size: 16px;
        color: #54667a;
        margin-bottom: 10px;
    }
    .date{
        margin-left: 10px;
        font-size: 14px;
        color: #afb6bd;
    }
    .des{
        font-size: 14px;
        color: #54667a;
        margin-bottom: 10px;
    }
    .imgList{
        font-size: 0;
    }
    .imgList img{
        width: 140px;
        height: 140px;
        margin: 5px calc(((100%/4) - 140px)/2);
    }
</style>

