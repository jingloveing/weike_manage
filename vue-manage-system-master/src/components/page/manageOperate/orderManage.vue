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
                    v-model="dateValue1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-select v-model="value1" placeholder="类型"  style="width: 160px;margin-right: 20px;" >
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value2" placeholder="状态"  style="width: 160px;margin-right: 20px;" >
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
                        <img :src="scope.row.product_image" alt="" style="width:76px;height:76px;margin-top: 5px;">
                    </template>
                </el-table-column>
                <el-table-column
                    label="标题"
                    width="200"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.product_name }}</template>
                </el-table-column>
                <el-table-column
                    prop="exchange_num"
                    label="数量">
                </el-table-column>
                <el-table-column
                    prop="wechat_nickname"
                    label="兑换ID"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="exchange_time"
                    label="下单时间"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="info"
                    label="预留信息"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="express_status"
                    label="状态"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    label="操作" inline-template width="100">
                    <template>
                        <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">发货</span>
                    </template>
                </el-table-column>
            </el-table>
            <div style="text-align: center;">
                <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">一件发货</el-button>
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
                    <el-select v-model="value3" placeholder="状态"  style="width: 160px;margin-right: 20px;" >
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
                        label="时间"
                        show-overflow-tooltip>
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
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">一键奖励</el-button>
                    <el-button type="danger" round style="background-color: #ff5b6b;border-color: #ff5b6b;">不通过</el-button>
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
                input:'',
                goodsDataList: [],
                options1: [{
                    value: '选项1',
                    label: '全部'
                },
                    {
                    value: '选项1',
                    label: '虚拟'
                },{
                    value: '选项3',
                    label: '实物'
                }
                ],
                value1:'全部',
                options2: [{
                    value: '选项1',
                    label: '全部'
                }, {
                    value: '选项3',
                    label: '已成交'
                }, {
                    value: '选项3',
                    label: '未发货'
                }
                ],
                value2:'全部',
                options3: [{
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
                value3:'全部',
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
                multipleSelection: []
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
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        },
        mounted() {


        },
        created: function () {

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
</style>
