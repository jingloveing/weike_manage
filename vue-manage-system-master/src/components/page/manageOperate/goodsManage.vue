<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">商品管理</p>
            <div class="ms-doc_main">
                <div>
                    <el-select v-model="data.condition1" placeholder="请选择"  style="width: 150px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition1"
                            :key="item.value"
                            :label="item.key"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="data.condition2" placeholder="状态" style="width: 150px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition2"
                            :key="item.value"
                            :label="item.key"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="data.condition3" placeholder="佣金定位" style="width: 150px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition3"
                            :key="item.id"
                            :label="item.key"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="data.condition4" placeholder="券额" style="width: 150px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition4"
                            :key="item.id"
                            :label="item.key"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="data.condition5" placeholder="专场" style="width: 150px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition5"
                            :key="item.id"
                            :label="item.store_name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;" @click="getGoodsList()">筛选</el-button>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="goodsList"
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
                            <img :src="scope.row.pict_url" alt="" style="width:90px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="100"
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
                        width="70"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="coupon_number"
                        label="券额/元"
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
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :page-size=data.limit
                        layout="prev, pager, next, jumper"
                        :page-count="totalPage" style="margin-bottom: 30px;">
                    </el-pagination>
                    <el-select v-model="cate_id" placeholder="选择分类"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in cateList"
                            :key="item.id"
                            :label="item.cate_name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="store_id" placeholder="选择专场" style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in searchList.condition5"
                            :key="item.id"
                            :label="item.store_name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;" @click="save()">确认</el-button>
                    <el-button type="danger" @click="del()">删除</el-button>
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
                totalPage:1,
                searchList:{},
                goodsList:[],
                data:{
                    condition1:'',
                    condition2:'',
                    condition3:'',
                    condition4:'',
                    condition5:'',
                    page: 1,
                    limit:10,
                },
                cate_id:'',
                goods_id:[],
                cateList:[],
                store_id:''
            }
        },
        methods: {
            //      获取搜索条件列表
            getSearchList: function () {
                this.$ajax.post('/api/goods/goodsSearchList',).then((res) => {
                    if (res.data.code == '200') {
                        this.searchList = res.data.data
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取分类列表
            getCateList: function () {
                this.$ajax.post('/api/goods/cateList',).then((res) => {
                    if (res.data.code == '200') {
                        this.cateList = res.data.data.cate_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取商品列表
            getGoodsList: function () {
                this.$ajax.post('/api/Goods/goodslist',this.data).then((res) => {
                    if (res.data.code == '200') {
                        this.goodsList = res.data.data.goods_list
                        this.totalPage = res.data.data.total_page
                    }
                }, (err) => {
                    console.log(err)
                })
            },
//            批量处理商品分类
            save: function () {
                this.$ajax.post('/api/goods/storeCategory',{goods_id:this.goods_id,cate_id:this.cate_id,store_id:this.store_id}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.getGoodsList()
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
            handleSelectionChange(val) {
                var data = []
                for (var i = 0; i < val.length; i++) {
                    data.push(val[i].id);
                }
                this.goods_id = data;
            },
            del(){
                this.$ajax.get('/api/Goods/delProduct',{params:{id:this.goods_id}}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.getGoodsList()
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
            //            页码改变
            handleCurrentChange(val) {
//                获取当前页数的消息
                this.data.page = val
                this.getGoodsList()
            },
        },
        mounted() {


        },
        created: function () {
              this.getSearchList()
            this.getGoodsList()
            this.getCateList()
        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        max-width: 980px;
        /*max-width: 1300px;*/
        background-color: white;
        padding: 0 40px;
        color: #54667a;
        margin-bottom: 54px;
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
