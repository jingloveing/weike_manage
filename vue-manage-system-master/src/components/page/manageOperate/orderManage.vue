<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">订单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">兑换商城订单</p>
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
                    <el-select v-model="value1" placeholder="类型" style="width: 160px;margin-right: 20px;">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="状态" style="width: 160px;margin-right: 20px;">
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
                    :data="orderList"
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
                        label="商品" height="95" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.product_image" alt="" style="width:76px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="180"
                        show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.product_name }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="exchange_num"
                        label="数量" width="80">
                    </el-table-column>
                    <el-table-column
                        prop="wechat_nickname"
                        label="兑换ID"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="exchange_time"
                        label="下单时间"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        label="预留信息" width="150">
                        <template slot-scope="scope">
                            <!--1-充值，2-提现，3-实物-->
                            <span v-show="scope.row.goods_type==1">{{scope.row.telephone}}</span>
                            <span v-show="scope.row.goods_type==2">{{scope.row.alipay}}</span>
                            <span v-show="scope.row.goods_type==3">
                            <p style="text-align: left;">收件人:{{scope.row.address.person_name}} </p>
                             <p style="text-align: left;"> 电话:{{scope.row.address.telephone}}</p>
                        <p style=" text-align: left;white-space:nowrap;overflow: hidden;text-overflow:ellipsis;width: 130px;">{{scope.row.address.province}}{{scope.row.address.country}}{{scope.row.address.district}}{{scope.row.address.address}}</p>
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="状态"
                        show-overflow-tooltip width="80">
                        <template slot-scope="scope">
                            <span v-show="scope.row.express_status==1">未发货</span>
                            <span v-show="scope.row.express_status==2">已发货</span>
                            <span v-show="scope.row.express_status==3">成交</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作" inline-template width="70">
                        <template>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">发货</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">一件发货
                    </el-button>
                </div>
            </div>
        </div>
        <div class="ms-doc sort">
            <p class="m_title">返利订单审核</p>
            <div class="ms-doc_main">
                <div>
                    <span>下单时间：</span>
                    <el-date-picker
                        v-model="dateValue1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-select v-model="value3" placeholder="状态" style="width: 160px;margin-right: 20px;">
                        <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;">筛选</el-button>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
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
                        label="商品" height="95">
                        <template slot-scope="scope">
                            <img :src="scope.row.pict_url" alt="" style="width:76px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="200"
                        show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.title }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="brokerage"
                        label="账号ID">
                    </el-table-column>
                    <el-table-column
                        prop="reserve_price"
                        label="订单号"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="zk_final_price"
                        label="时间">
                    </el-table-column>
                    <el-table-column
                        prop="discount"
                        label="状态"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="discount"
                        label="返元宝值"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        label="操作" inline-template width="180">
                        <template>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">已奖励</span>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">不通过</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">一键奖励
                    </el-button>
                    <el-button type="danger" round style="background-color: #ff5b6b;border-color: #ff5b6b;">不通过
                    </el-button>
                </div>
            </div>
        </div>
        <!--<div class="ms-doc sort">-->
        <!--<p class="m_title">返利订单设置</p>-->
        <!--<div class="ms-doc_main">-->
        <!--审核订单统一返利数值设定-->
        <!--<el-input v-model="input" placeholder="请输入数值" style="width: 322px;margin-left: 20px;"></el-input>-->
        <!--<el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">保存</el-button>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                start: '',
                end: '',
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
                orderList: [],
                input: '',
                goodsDataList: [],
                options1: [
                    {
                        value: '0',
                        label: '全部'
                    },
                    {
                        value: '1',
                        label: '虚拟'
                    }, {
                        value: '2',
                        label: '实物'
                    }
                ],
                value1: '0',
                options2: [
                    {
                        value: '0',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '未发货'
                    }, {
                        value: '2',
                        label: '已发货'
                    }, {
                        value: '3',
                        label: '已成交'
                    }
                ],
                value2: '0',
                options3: [
                    {
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项3',
                        label: '已奖励'
                    }, {
                        value: '选项3',
                        label: '未审核'
                    }, {
                        value: '选项3',
                        label: '未通过'
                    }
                ],
                value3: '全部',
                dateValue1: '',
                tableData3: [
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num: '10',
                        wechat_nickname: '200',
                        exchange_time: '2013-01-22',
                        info: '5',
                        express_status: '0.9',
                    }
                ],
                multipleSelection: []
            }
        },
        methods: {
            //      获取商品列表列表
            getOrderList: function () {
                this.$ajax.post('/api/Order/orderList', {}).then((res) => {
                    if (res.data.code == '200') {
                        this.orderList = res.data.data.order_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            changeDate1(e) {
                this.start = e
                this.getOrderList()
            },
            changeDate2(e) {
                this.end = e
                this.getOrderList()
            },
        },
        mounted() {


        },
        created: function () {
            this.getOrderList()
        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        max-width: 980px;
        /*max-width: 1300px;*/
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

    .sort {
        margin: 20px 0 54px;
    }
</style>
