<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">管理员列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <el-button type="primary" round
                       style="background-color: #0f8edd;border-color: #0f8edd;margin-bottom: 14px;">添加管理员
            </el-button>
            <div class="ms-doc_main">
               <p>通知标题</p>
                <el-input v-model="title" style="width: 500px;margin: 20px 0;"></el-input>
                <p>通知内容</p>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 12, maxRows: 12}"
                    placeholder="请输入内容"
                    v-model="content" style="width: 500px;margin: 20px 0;">
                </el-input>
                <p>群发对象</p>
                <el-select v-model="value" placeholder="请选择"  style="width: 160px;margin: 20px 0;" >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <div style="text-align: center;">
                    <el-button type="primary" round
                               style="background-color: #0f8edd;border-color: #0f8edd;margin-bottom: 50px;">确认
                    </el-button>
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
                options: [{
                    value: '选项1',
                    label: '全部'
                }
                ],
                value:'全部',
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
    .pro{
        color: #0f8edd;
        padding: 0 10px;
    }
    .proB{
        border-left: 1px solid #bfbfbf;
        border-right: 1px solid #bfbfbf;
    }
</style>
