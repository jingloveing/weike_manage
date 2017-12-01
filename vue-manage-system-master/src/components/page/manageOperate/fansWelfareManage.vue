<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">粉丝福利管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">粉丝福利商品</p>
            <div class="ms-doc_main">
                <div>
                    <el-select v-model="value1" placeholder="全部商品" style="width: 160px;margin-right:20px;">
                        <el-option
                            v-for="item in options1"
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
                        label="折后/元">
                    </el-table-column>
                    <el-table-column
                        prop="wechat_nickname"
                        label="劵额/元"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="exchange_time"
                        label="库存量/件"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="info"
                        label="状态"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        label="返元宝值" inline-template>
                        <template>
                            <input type="text" style="width: 72px;height: 24px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作" inline-template width="90">
                        <!--只有下架-->
                        <template>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">下架</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-select v-model="value2" placeholder="全部商品" style="width: 160px;margin-right:20px;">
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">确认
                    </el-button>
                    <el-button type="danger" round>批量下架</el-button>
                </div>
            </div>
        </div>
        <div class="ms-doc sort">
            <p class="m_title">粉丝福利banner图</p>
            <div class="ms-doc_main">
                <div style="margin-bottom: 20px;">
                    <div style="position: relative;display: inline-block;width: 500px;">
                        <p>图片上传：</p>
                        <div class="upload_img" id="upload_img1">
                            <img :src="imgUrl1" alt="" style="width: 100%;height: 100%;">
                            <p>750*180像素尺寸；格式jpg,png,3M内大小。</p>
                        </div>
                        <input id="file1" type="file" style="display: none" @change="uploadImg1($event)" multiple
                               accept="image/*">
                        <label for="file1" class="upload_btn">上传</label>
                    </div>
                    <div style="float: right;">
                        <p>banner跳转链接：</p>
                        <el-input placeholder="请输入链接" v-model="input" style="width: 300px;margin:20px 20px 20px 0;">
                            <template slot="prepend">http://</template>
                        </el-input>
                        <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">确认
                        </el-button>
                    </div>
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
                input: '',
                goodsDataList: [],
                options1: [{
                    value: '选项1',
                    label: '全部商品'
                },
                    {
                        value: '选项2',
                        label: '最新'
                    }
                ],
                value1: "全部商品",
                options2: [{
                    value: '选项1',
                    label: '批量处理'
                }, {
                    value: '选项2',
                    label: '10元宝'
                }, {
                    value: '选项3',
                    label: '20元宝'
                }, {
                    value: '选项4',
                    label: '50元宝'
                }, {
                    value: '选项5',
                    label: '100元宝'
                }, {
                    value: '选项6',
                    label: '200元宝'
                }, {
                    value: '选项7',
                    label: '500元宝'
                }
                ],
                value2: '批量处理',
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
                    }
                ],
                multipleSelection: [],
                textarea: ''
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
            uploadImg1: function (e) {
                const formData = new FormData();
                formData.append('images', e.target.files[0]);
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.$ajax.post('api/Index/upload', formData, config).then((res) => {
                    if (res.data.code == '200') {
                        this.imgUrl1 = res.data.data.image_url

                    }
                }, (err) => {
                })
            },
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

    .sort {
        margin: 20px 0 54px;
    }

    .upload_img {
        width: 375px;
        height: 130px;
        background-image: url("/static/img/upload_img_bd.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
        margin: 25px 20px 25px 5px;
    }

    .upload_btn {
        font-size: 14px;
        background-color: #0f8edd;
        border-color: #0f8edd;
        position: absolute;
        padding: 8px 15px;
        color: white;
        border-radius: 5px;
        top:45px;
    }
</style>
