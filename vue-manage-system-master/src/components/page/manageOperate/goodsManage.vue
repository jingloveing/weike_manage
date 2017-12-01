<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">商品分类管理</p>
            <div class="ms-doc_main">
                <div>
                    <el-select v-model="value1" placeholder="请选择"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="状态" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value3" placeholder="佣金定位" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value4" placeholder="劵额" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value5" placeholder="专场" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options5"
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
                        <template scope="scope">
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
                        label="佣金/元">
                    </el-table-column>
                    <el-table-column
                        prop="reserve_price"
                        label="原价/元"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="zk_final_price"
                        label="折后/元"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="discount"
                        label="折扣"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="coupon_number"
                        label="劵额/元"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="volume"
                        label="销量/件"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="stock"
                        label="库存量/件"
                        show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-select v-model="value1" placeholder="选择分类"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="选择专场" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;">确认</el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                goodsDataList: [],
                options1: [{
                    value: '选项1',
                    label: '全部商品'
                }, {
                    value: '选项2',
                    label: '最新'
                }, {
                    value: '选项3',
                    label: '即将领完'
                }
                ],
                value1:'全部商品',
            options2: [{
                value: '选项1',
                label: '展示'
            }, {
                value: '选项3',
                label: '即将过期'
            }
            ],
                value2:'',
                options3: [{
                    value: '选项1',
                    label: '30%以上'
                }, {
                    value: '选项2',
                    label: '10%-30%'
                },{
                    value: '选项3',
                    label: '10%以下'
                }
                ],
                value3:'',
                options4: [{
                    value: '选项1',
                    label: '1-10元'
                }, {
                    value: '选项2',
                    label: '10-20元'
                },{
                    value: '选项3',
                    label: '20元以上'
                }
                ],
                value4:'',
                options5: [{
                    value: '选项1',
                    label: '粉丝福利'
                }, {
                    value: '选项2',
                    label: '9.9专场'
                },{
                    value: '选项3',
                    label: '19.9专场'
                },{
                    value: '选项3',
                    label: '聚折扣'
                },{
                    value: '选项3',
                    label: '应季必备'
                }
                ],
                value5:'',
                tableData3: [
                    {
                    pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                    title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    brokerage:'10',
//                    原价
                    reserve_price:'200',
                    zk_final_price:'5',
//                    折扣
                    discount:'0.9',
                    coupon_number:'100',
//                    销量
                    volume:'100',
                    stock:'100',
                },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
                    {
                        pict_url: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        title: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        brokerage:'10',
//                    原价
                        reserve_price:'200',
                        zk_final_price:'5',
//                    折扣
                        discount:'0.9',
                        coupon_number:'100',
//                    销量
                        volume:'100',
                        stock:'100',
                    },
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
</style>
