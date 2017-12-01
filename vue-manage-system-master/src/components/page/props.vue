<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">消息参数</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">商城消息设置</p>
            <div class="ms-doc_main">
                <p><span class="title">实物商品发货通知：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="您在商城兑换的商品已经发货啦~"></el-input></p>
                <p><span class="title">现金提现成功通知：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="您的红包提现到账啦~"></el-input></p>
                <p><span class="title">虚拟充值兑换成功通知：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="您的充值到账啦~"></el-input></p>
            </div>
            <p class="m_title">晒单消息设置</p>
            <div class="ms-doc_main">
                <p><span class="title">“通过晒单”消息回复：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="恭喜您的晒单成功~获得了元宝奖励"></el-input></p>
                <p><span class="title">“未通过晒单”消息回复：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="很抱歉您的晒单未通过审核，请按照晒单说明晒单~"></el-input></p>
            </div>
            <p class="m_title">订单审核消息设置</p>
            <div class="ms-doc_main">
                <p><span class="title">“通过审核”消息回复：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="恭喜您的订单通过审核~获得了元宝奖励~"></el-input></p>
                <p><span class="title">“未通过审核”消息回复：</span><el-input v-model="title" style="width: 500px;margin: 20px 0;" placeholder="很抱歉您的定订单未通过审核，请添加有效订单~"></el-input></p>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" round
                           style="background-color: #0f8edd;border-color: #0f8edd;margin-bottom: 50px;">确认
                </el-button>
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
    .m_title {
        font-size: 20px;
        color: #54667a;
        line-height: 60px;
        border-bottom: 1px solid #e9f1f3;
    }
    .title{
        display: inline-block;width: 250px;text-align: right;
    }
</style>
