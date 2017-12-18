<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">商品采集</el-breadcrumb-item>
            </el-breadcrumb>
            <p>商品总库总共：<span>1111</span>件商品</p>
        </div>
        <div class="ms-doc">
            <el-form ref="form" :model="form" label-width="50px" style="color: #848c97;">
                <el-form-item label="时间">
                    <span class="time_tab">全部</span>
                    <span class="time_tab">今日更新</span>
                    <span class="time_tab">1小时更新</span>
                    <span class="time_tab">6小时更新</span>
                    <span class="time_tab">24小时更新</span>
                    <span class="time_tab">时间区间</span>
                    <el-date-picker
                        v-model="form.value1"
                        type="datetime"
                        placeholder="开始时间" class="time_tab time"></el-date-picker>
                    -
                    <el-date-picker
                        v-model="form.value2"
                        type="datetime"
                        placeholder="结束时间" class="time">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="类目">
                    <span class="time_tab">全部</span>
                    <el-checkbox-group v-model="form.type" class="time_tab">
                        <el-checkbox label="女装" name="type"></el-checkbox>
                        <el-checkbox label="男装" name="type"></el-checkbox>
                        <el-checkbox label="鞋包" name="type"></el-checkbox>
                        <el-checkbox label="手机周边" name="type"></el-checkbox>
                        <el-checkbox label="美妆" name="type"></el-checkbox>
                        <el-checkbox label="美食" name="type"></el-checkbox>
                        <el-checkbox label="母婴" name="type"></el-checkbox>
                        <el-checkbox label="百货" name="type"></el-checkbox>
                        <el-checkbox label="其他" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="商品">
                    <span class="time_tab">价格</span>
                    <span class="time_tab"><input type="number">-<input type="number"></span>
                    <span class="time_tab">拥金</span>
                    <span class="time_tab"><input type="number">-<input type="number"></span>
                    <span class="time_tab">拥金比</span>
                    <span class="time_tab"><input type="number"></span>
                    <span class="time_tab">月销量</span>
                    <span class="time_tab"><input type="number"></span>
                </el-form-item>
                <el-form-item label="领券">
                    <span class="time_tab">折扣力度</span>
                    <span class="time_tab"><input type="number"></span>
                    <span class="time_tab">券价值</span>
                    <span class="time_tab"><input type="number">-<input type="number"></span>
                </el-form-item>
            </el-form>
        </div>
        <div class="ms-doc sort">
            <ul class="tab" id="tabs">
                <li class="active">综合排序</li>
                <li>最新</li>
                <li>价格</li>
                <li>销量</li>
                <li>月销额</li>
                <li>拥金比</li>
                <li>拥金量</li>
                <li>折扣力度</li>
            </ul>
            <ul class="goods_list" style="font-size: 0;">
                <li v-for="i in 10">
                    <div class="pic">
                        <img src="/static/img/img.jpg" alt="" style="width: 100%;height: 100%;">
                    </div>
                    <div class="goods_des">
                        <div class="title">
                            <p class="goods_title" title="哈哈哈哈">
                                商品名称商哈哈哈哈哈哈哈哈哈哈哈哈哈品名称商品名称商品名称商品名SD敢达好多事似懂非懂就是的地方
                            </p>
                        </div>
                        <p class="price">
                            <small>￥</small>
                            <span class="new_price">88</span>
                            <small>.88</small>
                            <del>￥7.3</del>
                            <span class="num">月销 <span>111</span></span></p>
                        <p>
                            <span class="rate"> <small>比率</small><span>20</span><small>.3%</small></span>
                            <span class="rate_right"><small style="color: #c0c0c0;">拥金</small> <span
                                style="font-size: 14px;color: #848c9e;">￥15</span><small
                                style="color: #848c9e;">.13</small></span>
                        </p>
                        <p style="margin: 7px 0;">
                            <span class="juan"><span class="juan_1">券</span><span class="juan_2">10元</span></span>
                            <span class="discount">折扣 <span>1.4</span>折</span>
                        </p>
                        <p style="line-height: 16px;font-size: 12px;color: #848c97;vertical-align: middle;">
                            <img src="/static/img/shop_img.png" alt=""
                                 style="width: 14px;height: 14px;vertical-align: middle;margin-bottom: 3px;">店铺名字
                            <img src="/static/img/jian.png" alt="" style="width: 14px;height: 14px;float: right;">
                        </p>
                    </div>
                    <div class="btn"><span>复制文案</span><span>选取 <img src="/static/img/down.png" alt=""
                                                                    style="width: 10px;height: 10px;"></span></div>
                </li>
            </ul>
            <div class="block">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size=per_page
                    layout="prev, pager, next, jumper"
                    :total=messageList.total>
                </el-pagination>
            </div>
        </div>
        <div class="goods_selected">
            <div class="goods_selected_main" v-show="isShow">
                <span class="clearAll">清空所选商品</span>
                <div class="selected_goods">
                     <ul class="selected_goods_list">
                         <li>
                             <div class="selected_list_left">
                                 <img src="/static/img/img.jpg" alt="">
                             </div>
                             <div class="selected_list_right">
                                 <p> <img src="/static/img/jian.png" alt="" style="width: 14px;height: 14px;float: left;"><span class="selected_list_title">商品名称名称名称斯蒂芬斯哦大神们佛阿迪第三方</span></p>
                                 <p><span>￥99</span><span class="juan"><span class="juan_1">券</span><span class="juan_2">10元</span></span></p>
                             </div>
                         </li>
                     </ul>
                </div>
            </div>
            <div style="line-height: 66px;">
                 <span class="goods_selected_center">
                     <span class="has_selected" @click="toshow()">
                         已选商品( <span style="color: #ff526d;">11</span>)
                         <img src="/static/img/arrow_down.png" alt="" v-show="!isShow">
                         <img src="/static/img/arrow_up.png" alt="" v-show="isShow">
                     </span>
            </span>
                <span class="goods_selected_btn">
                采集到库
            </span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    value1: '',
                    value2: '',
                },
                per_page: 15,
                messageList: {
                    data: [],
                    total: 1
                },
                isShow: false
            }
        },
        methods: {
            //      获取消息模板
            getSetMessage: function () {
                this.$ajax.get('/api/Message/setMessage').then((res) => {
                    if (res.data.code == '200') {
                        this.message = res.data.data.message
                        console.log(this.message)
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            onSubmit() {
                console.log('submit!');
            },
            handleCurrentChange(val) {
//                获取当前页数的消息
                this.getMessageList(val)
            },
            toshow(){
                this.isShow=!this.isShow
            }

        },
        mounted() {
//            综合排序选项卡
            var tab = document.getElementById('tabs').getElementsByTagName('li');
            for (var i = 0; i < tab.length; i++) {
                let self = this
                tab[i].index = i
                tab[i].onclick = function () {
                    for (var j = 0; j < tab.length; j++) {
                        tab[j].className = ""
                    }
                    tab[this.index].className = "active"
                }
            }
        },
        created: function () {

        }
    }
</script>

<style scoped>
    ul li {
        display: inline-block;
        list-style: none;
    }

    .ms-doc {
        width: 980px;
        /*max-width: 1300px;*/
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        background-color: white;
        padding: 20px;
        color: #54667a;
    }

    .sort {
        margin: 20px 0 54px;
    }

    .crumbs {
        margin-bottom: 10px;
    }

    .crumbs p {
        color: #54667a;
        font-size: 12px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .crumbs p span {
        color: #fc4b6c;
    }

    .time_tab {
        text-align: center;
        display: inline-block;
        padding-left: 18px;
    }

    .time_tab input {
        width: 50px;
        outline: none;
        border: 1px solid #e3e3e3;
        padding: 4px 5px;
        color: #54667a;
    }

    .tab {
        border-bottom: 1px solid #e9f1f3;
    }

    .tab li {
        padding: 10px;
        color: #848c97;
        font-size: 14px;
        margin: 0 5px;
    }

    .tab .active {
        color: #0f8edd;
        border-bottom: 3px solid #0f8edd;
    }

    .goods_list {
        font-size: 0;
    }

    .goods_list li {
        width: 208px;
        border: 1px solid #e3e3e3;
        margin-top: 26px;
        margin: 26px 17px 0;
    }

    .pic {
        width: 100%;
        height: 208px;
        background-color: red;
        text-align: center;
        position: relative;
    }

    .title {
        height: 31px;
    }

    .goods_title {
        font-size: 12px;
        color: #848c97;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .goods_des {
        margin: 5px 10px;
    }

    .goods_des small {
        font-size: 12px;
    }

    .price {
        font-size: 12px;
        margin: 8px 0;
    }

    .price small, .new_price {
        color: #848c97;
    }

    .new_price {
        font-size: 14px;
    }

    .price del {
        color: #c0c0c0;
        margin-left: 10px;
    }

    .num {
        float: right;
        color: #c0c0c0;
    }

    .num span {
        color: #848c97;
    }

    .rate {
        color: #ffa55c;
        font-size: 14px;
    }

    .rate_right {
        float: right;
    }

    .juan {
        display: inline-block;
        border: 1px solid #ffa55c;
        font-size: 12px;
        color: #ffa55c;
        line-height: 18px;
        box-sizing: border-box;
    }

    .juan_1 {
        display: inline-block;
        background-color: #ffa55c;
        color: white;
        width: 16px;
        text-align: center;
        height: 100%;
    }

    .juan_2 {
        padding: 0 5px;
    }

    .discount {
        float: right;
        font-size: 12px;
        color: #c0c0c0;
    }

    .discount > span {
        color: #ffa55c;
    }

    .btn {
        color: #848c9e;
        font-size: 12px;
        width: 100%;
        border-top: 1px solid #e3e3e3;
    }

    .btn span {
        width: 50%;
        line-height: 28px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }

    .btn span:hover {
        background-color: #e9f1f3;
        color: #0f8edd;
    }

    .block {
        text-align: center;
        margin-top: 40px;
    }

    .goods_selected {
        width: 1020px;
        position: fixed;
        bottom: 0;
        z-index: 999999;
        background-color: white;
        color: #848c97;
        font-size: 0px;

    }

    .goods_selected_center {
        width: calc(1020px - 136px);
        text-align: center;
        display: inline-block;
        font-size: 14px;
    }

    .goods_selected_center img {
        width: 16px;
        height: 9px;
    }

    .goods_selected_btn {
        display: inline-block;
        width: 136px;
        height: 100%;
        text-align: center;
        background-color: #ff526d;
        font-size: 14px;
        color: white;
    }
    .has_selected{
        width: 200px;display: inline-block;
        cursor: pointer;

    }
    .has_selected:hover{
        background-color: #e3e3e3;
    }
    .clearAll{
        font-size: 12px;
        color: #848c97;
        cursor: pointer;
        right: 20px;
        top: 10px;
        position: absolute;

    }
    .clearAll:hover{
        color: #ff526d;
    }
    .goods_selected_main{
        height: 360px;width:100%;border: 1px solid #e3e3e3;position: relative;
        overflow-y: scroll;
    }
    .selected_goods{
        margin: 40px 20px;

    }
    .selected_goods_list{
        font-size: 0;
    }
    .selected_goods_list li{
        width: 260px;
        height: 60px;
        font-size: 0px;
        border: 1px solid #e3e3e3;
        margin: 10px calc(((100%/3) - 280px)/2);
        padding: 10px;
        box-sizing:content-box;
    }
    .selected_list_left{
        width: 60px;height: 100%;display: inline-block;
    }
    .selected_list_left img{
        width: 60px;height: 60px;
    }
    .selected_list_right{
        width: 190px;height: 100%;display: inline-block;
        margin-left: 10px;
    }
    .selected_list_title{
        display: inline-block;
        font-size: 12px;
        color: #848c97;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
</style>
<style>
    .el-form-item__content {
        font-size: 12px;
    }

    .time .el-input__inner {
        height: 26px;
    }

    .el-checkbox__label {
        color: #54667a;
        font-size: 12px;
    }

    .el-form-item {
        margin-bottom: 0px;
    }
</style>
