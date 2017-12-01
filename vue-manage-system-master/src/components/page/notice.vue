<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">通知中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <div class="ms-doc_main">
                <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                            一致性 Consistency <span class="date">2017-10-20 <i class="round"></i></span>
                        </template>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item>
                        <template slot="title">
                            一致性 Consistency <span class="date">2017-10-20</span>
                        </template>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item>
                        <template slot="title">
                            一致性 Consistency <span class="date">2017-10-20</span>
                        </template>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                </el-collapse>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
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
                title:'',
                content:'',
                isShow: false,
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
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
            toShow(){
                this.isShow=true
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
        padding: 40px;
        color: #54667a;
    }

    .ms-doc_main {
        padding: 20px;
        border-top: 1px solid #e9f1f3;
    }

    .lead_out img {
        margin: 0 10px -3px 0;
        width: 16px;
        height: 18px;
    }
    .block{
        margin: 20px;
        float: right;
    }
    .date{
        float: right;margin-right: 20px;width: 150px;
    }
    .round{
        margin-left: 10px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #fc4b6c;
        border-radius: 50%;
        margin-top: 18px;
        float: right;
    }
</style>
<style>
    .el-pager li.active {
        border-color: #0f8edd;
        background-color: #0f8edd;
    }
</style>
