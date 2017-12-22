<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">商品采集</el-breadcrumb-item>
            </el-breadcrumb>
            <p>商品总库总共：<span>{{totalCount}}</span>件商品</p>
        </div>
        <div class="ms-doc">
            <el-form ref="form" label-width="50px" style="color: #848c97;">
                <el-form-item label="时间">
                    <span class="time_tab time_select timeTab">全部</span>
                    <span class="time_tab timeTab">今日更新</span>
                    <span class="time_tab timeTab">1小时更新</span>
                    <span class="time_tab timeTab">6小时更新</span>
                    <span class="time_tab timeTab">24小时更新</span>
                    <span class="time_tab">时间区间</span>
                    <el-date-picker
                        v-model="data.start"
                        type="datetime"
                        placeholder="开始时间" class="time_tab time" @change="startChange"></el-date-picker>
                    -
                    <el-date-picker
                        v-model="data.end"
                        type="datetime"
                        placeholder="结束时间" class="time" @change="endChange">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="类目">
                    <span class="time_tab time_select" id="all" @click="all()">全部</span>
                    <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange"
                                       style="display: inline-block;margin-left: 14px;">
                        <el-checkbox v-for="(list,index) in list" :label="index+1" :key="index+1">{{list}}</el-checkbox>
                    </el-checkbox-group>
                    <!--<span class="time_tab time_select">全部</span>-->
                    <!--<el-checkbox-group v-model="form.type" class="time_tab">-->
                    <!--<el-checkbox label="女装" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="男装" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="鞋包" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="手机周边" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="美妆" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="美食" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="母婴" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="百货" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="其他" name="type"></el-checkbox>-->
                    <!--</el-checkbox-group>-->
                </el-form-item>
                <el-form-item label="商品">
                    <span class="time_tab">价格</span>
                    <span class="time_tab"><input type="number" v-model="data.price_start">-<input type="number"
                                                                                                   v-model="data.price_end"></span>
                    <span class="time_tab">佣金</span>
                    <span class="time_tab"><input type="number" v-model="data.commission_start">-<input type="number"
                                                                                                        v-model="data.commission_end"></span>
                    <span class="time_tab">佣金比</span>
                    <span class="time_tab"><input v-model="data.rate"></span>
                    <span class="time_tab">月销量</span>
                    <span class="time_tab"><input type="number" v-model="data.volume"></span>
                </el-form-item>
                <el-form-item label="领券">
                    <!--<span class="time_tab">折扣力度</span>-->
                    <!--<span class="time_tab"><input type="number"></span>-->
                    <span class="time_tab">券价值</span>
                    <span class="time_tab"><input type="number" v-model="data.coupon_number_start">-<input type="number"
                                                                                                           v-model="data.coupon_number_end"></span>
                </el-form-item>
            </el-form>
            <el-button type="primary" round
                       style="margin-top: 10px;" @click="getGoodsList()">搜索
            </el-button>
        </div>
        <div class="ms-doc sort">
            <ul class="tab" id="tabs">
                <li class="active">综合排序</li>
                <li>最新</li>
                <li>价格</li>
                <li>销量</li>
                <li>月销额</li>
                <li>佣金比</li>
                <li>佣金量</li>
                <!--<li>折扣力度</li>-->
            </ul>
            <ul class="goods_list" style="font-size: 0;">
                <li v-for="(list,index) in goodsList" :key="index">
                    <div class="pic">
                        <img :src="list.pict_url" alt="" style="width: 100%;height: 100%;">
                    </div>
                    <div class="goods_des">
                        <div class="title">
                            <p class="goods_title" :title="list.title">
                                {{list.title}}
                            </p>
                        </div>
                        <p class="price">
                            <small>￥</small>
                            <span class="new_price" v-text="list.zk_final_price.rmb">88</span>
                            <small v-show="list.zk_final_price.corner!=='00'">.{{list.zk_final_price.corner}}</small>
                            <del>￥{{list.reserve_price}}</del>
                            <span class="num">月销 <span v-text="list.volume">111</span></span></p>
                        <p>
                            <span class="rate"> <small>比率</small><span v-text="list.commission_rate.rmb">20</span><small
                                v-show="list.commission_rate.corner!=='00'">.{{list.commission_rate.corner}}</small><small>%</small></span>
                            <span class="rate_right"><small style="color: #c0c0c0;">佣金</small> <span
                                style="font-size: 14px;color: #848c9e;">￥{{list.commission.rmb}}</span><small
                                style="color: #848c9e;"
                                v-show="list.commission.corner!=='00'">.{{list.commission.corner}}</small></span>
                        </p>
                        <p style="margin: 7px 0;">
                            <span class="juan"><span class="juan_1">券</span><span
                                class="juan_2">{{list.coupon_number}}元</span></span>
                            <span class="discount">折扣 <span>{{list.discount}}</span> 折</span>
                        </p>
                        <p style="line-height: 16px;font-size: 12px;color: #848c97;vertical-align: middle;">
                            <img src="/static/img/shop_img.png" alt=""
                                 style="width: 14px;height: 14px;vertical-align: middle;margin-bottom: 3px;"><span
                            style="width: 140px;overflow: hidden;margin-left: 4px;height: 14px;display: inline-block;">{{list.shop_title}}</span>
                            <img src="/static/img/jian.png" alt="" style="width: 14px;height: 14px;float: right;">
                        </p>
                    </div>
                    <div class="btn">
                        <span style="position: relative;">
                            <!--<span>复制文案</span>-->
                            <el-tooltip placement="right">
                                  <div slot="content" class="copyText">
                                      <img style="width: 100px;height: 100px;" :src="list.pict_url">
                                      <p style="width: 250px;">{{list.title}}</p>
                                      <p>券后￥{{list.zk_final_price.rmb}}<a v-show="list.zk_final_price.corner!=='00'">.{{list.zk_final_price.corner}}</a></p>
                                      <p>{{list.coupon_number}}元优惠券</p>
                                      <p>券：{{list.coupon_url}}</p>
                                      <p style="width: 250px;">下单链接：{{list.coupon_click_url}}</p>
                                      <p style="width: 250px;">{{list.item_description}}</p>
                                  </div>
                                  <el-button class="copy"  :data-clipboard-text="list.title+'               券后￥'+list.zk_final_price.rmb+'.'+list.zk_final_price.corner+'                   '+
                                      list.coupon_number+'元优惠券'+'              券：'+list.coupon_url+'                        下单链接：'+list.coupon_click_url+list.item_description">复制文案</el-button>
                            </el-tooltip>
                        </span>
                        <span @click="toSelect(list)">选取 <img src="/static/img/down.png" alt=""
                                                              style="width: 10px;height: 10px;"></span></div>
                </li>
            </ul>
            <div class="block">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size=per_page
                    layout="prev, pager, next, jumper"
                    :total="totalPage">
                </el-pagination>
            </div>
        </div>
        <div class="goods_selected">
            <div class="goods_selected_main" v-show="isShow">
                <span class="clearAll" v-show="selectList.length!==0" @click="clearAll()">清空所选商品</span>
                <div class="selected_goods">
                    <div style="width: 100%;text-align: center;" v-show="selectList.length==0">
                        <img src="/static/img/empty.png" alt="" style="width: 200px;height: 200px;">
                    </div>
                    <ul class="selected_goods_list">
                        <li v-for="(list,index) in selectList" :key="index">
                            <div class="selected_list_left">
                                <img :src="list.pict_url" alt="">
                            </div>
                            <div class="selected_list_right">
                                <p style="line-height: 17px;vertical-align: middle">
                                    <img src="/static/img/jian.png" alt=""
                                         style="width: 14px;height: 14px;float: left;">
                                    <span class="selected_list_title">{{list.title}}</span>
                                </p>
                                <p style="line-height: 30px;">
                                    <span
                                        style="font-size: 12px;color: #848c97;vertical-align: middle;">￥{{list.zk_final_price.rmb}} <span
                                        v-show="list.zk_final_price.corner!==''">.{{list.zk_final_price.corner}}</span></span>
                                    <span class="juan" style="float: right;margin-top: 8px;"><span
                                        class="juan_1">券</span><span
                                        class="juan_2">{{list.coupon_number}}元</span></span>
                                </p>
                                <p style="font-size: 12px;">
                                    <span style="color: #c0c0c0;">佣金￥{{list.commission.rmb}}</span><span
                                    style="color: #848c9e;"
                                    v-show="list.commission.corner!==''">.{{list.commission.corner}}</span>
                                    <span style="float: right;color: #ffa55c;">
                                         比率<span v-text="list.commission_rate.rmb">20</span>
                                         <span v-show="list.commission_rate.corner!==''">.{{list.commission_rate.corner}}</span><span>%</span>
                                     </span>
                                </p>
                            </div>
                            <span class="close_btn" @click="closeSelected(index)"><img src="/static/img/cancel_img.png"
                                                                                       alt=""></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="line-height: 66px;">
                 <span class="goods_selected_center">
                     <span class="has_selected" @click="toshow()">
                         已选商品(<span style="color: #ff526d;">{{selectList.length}}</span>)
                         <img src="/static/img/arrow_down.png" alt="" v-show="!isShow">
                         <img src="/static/img/arrow_up.png" alt="" v-show="isShow">
                     </span>
            </span>
                <span class="goods_selected_btn" @click="toLib()">
                采集到库
            </span>
            </div>
        </div>

    </div>
</template>

<script>
    const Options = ['女装', '男装', '鞋包', '手机周边', '美妆', '美食', '母婴', '百货', '其他'];
    import Clipboard from 'clipboard';
    export default {
        components: {},
        data() {
            return {
                checkAll: false,
                checkedList: [],
                list: Options,
                isIndeterminate: true,
                per_page: 15,
                data: {
                    page: 1,
                    limit: 40,
                    update_time: '1',
                    start: '',
                    end: '',
                    price_start: '',
                    price_end: '',
                    commission_start: '',
                    commission_end: '',
                    rate: '',
                    volume: '',
                    coupon_number_start: '',
                    coupon_number_end: '',
                    sort: '1'
                },
                isShow: false,
                goodsList: [],
                totalPage: null,
                totalCount: '',
                selectList: [],
            }
        },
        methods: {
            //      获取商品列表
            getGoodsList: function () {
                this.data.cate = JSON.stringify(this.checkedList)
                this.$ajax.get('/api/Goods/collectProduct', {params: this.data}).then((res) => {
                    if (res.data.code == '200') {
                        this.goodsList = res.data.data.goods_list
                        this.totalPage = res.data.data.total_page
                        this.totalCount = res.data.data.total_count
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
                this.data.page = val
                document.getElementsByClassName('content')[0].scrollTop = 0
                document.documentElement.scrollTop = 0
                this.getGoodsList()
            },
            toshow() {
                this.isShow = !this.isShow
            },
            closeSelected(index) {
                this.selectList.splice(index, 1)
                localStorage.setItem('selectList', JSON.stringify(this.selectList))

            },
//            选择开始日期
            startChange(e) {
                this.data.start = e
            },
//            选择结束日期
            endChange(e) {
                this.data.end = e
            },
//            监听类目多选选项
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                if (checkedCount == 0) {
                    document.getElementById('all').classList.add('time_select')
                    this.checkedList = []
                } else {
                    document.getElementById('all').classList.remove('time_select')
                    this.data.cate = this.checkedList;
                }
            },
            all() {
                document.getElementById('all').classList.add('time_select')
                this.checkedList = []
            },
            toSelect(e) {
                if(JSON.parse(localStorage.getItem('selectList'))){
                    this.selectList = JSON.parse(localStorage.getItem('selectList'))
                }else{
                    this.selectList = []
                }
                console.log(this.selectList)
                if(this.selectList.length==0){
                    this.selectList.push(e)
                    this.$message({
                        message: "选取成功",
                    });
                    localStorage.setItem('selectList',JSON.stringify(this.selectList))
                }else{
                    for(var i=0;i<this.selectList.length;i++){
                        if(this.selectList[i].id==e.id){
                            this.$message({
                                message: "请勿重选",
                                type: 'error'
                            });
                           return
                        }
                        break
                    }
                    this.selectList.push(e)
                    this.$message({
                        message: "选取成功",
                    });
                    localStorage.setItem('selectList',JSON.stringify(this.selectList))
                }

            },
//            清空采集的商品
            clearAll() {
                localStorage.removeItem('selectList')
                this.selectList = []
            },
//            采集商品到库
            toLib() {
                var id = []
                for (var i = 0; i < this.selectList.length; i++) {
                    id.push(this.selectList[i].id)
                }
                if (id.length == 0) {
                    return
                }
                this.$ajax.post('/api/Goods/doCollect', {id: id}).then((res) => {
                    if (res.data.code == '200') {
                        localStorage.removeItem('selectList')
                        this.selectList = []
                        this.$message({
                            message: res.data.data.message,
                        });
                    } else {
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                }, (err) => {
                    console.log(err)
                })
            },
        },
        mounted() {
            const clipboard = new Clipboard('.copy');
            let self = this
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
                    self.data.sort = this.index + 1
                    self.getGoodsList()

                }
            }
            var timeTab = document.getElementsByClassName('timeTab')
            for (var i = 0; i < timeTab.length; i++) {
                let self = this
                timeTab[i].index = i
                timeTab[i].onclick = function () {
                    for (var j = 0; j < timeTab.length; j++) {
                        timeTab[j].classList.remove("time_select");
                    }
                    timeTab[this.index].classList.add("time_select");
                    switch (this.index) {
                        case 0:
                            self.data.update_time = '1'
                            break;
                        case 1:
                            self.data.update_time = '2'
                            break;
                        case 2:
                            self.data.update_time = '5'
                            break;
                        case 3:
                            self.data.update_time = '3'
                            break;
                        case 4:
                            self.data.update_time = '4'
                            break;
                    }
                }
            }
            if (JSON.parse(localStorage.getItem('selectList'))) {
                this.selectList = JSON.parse(localStorage.getItem('selectList'))
            } else {
                this.selectList = []
            }
            clipboard.on('success', function(e) {
                self.$message({
                    message: "复制成功"
                });
                e.clearSelection();

            });
            clipboard.on('error', function(e) {
                self.$message({
                    message: "复制失败",
                    type: 'error'
                });
            });
        },
        created: function () {
            this.getGoodsList()

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
        cursor: pointer;
    }

    .time_tab input {
        width: 50px;
        outline: none;
        border: 1px solid #e3e3e3;
        padding: 4px 5px;
        color: #54667a;
    }

    .time_select {
        color: #4b9efc;
    }

    .tab {
        border-bottom: 1px solid #e9f1f3;
    }

    .tab li {
        padding: 10px;
        color: #848c97;
        font-size: 14px;
        margin: 0 5px;
        cursor: pointer;
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
        font-size: 0;
        width: 100%;
        border-top: 1px solid #e3e3e3;
    }

    .btn span {
        width: 50%;
        line-height: 28px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        font-size: 12px;
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

    .has_selected {
        width: 200px;
        display: inline-block;
        cursor: pointer;

    }

    .has_selected:hover {
        background-color: #e3e3e3;
    }

    .clearAll {
        font-size: 12px;
        color: #848c97;
        cursor: pointer;
        right: 20px;
        top: 10px;
        position: absolute;

    }

    .clearAll:hover {
        color: #ff526d;
    }

    .goods_selected_main {
        height: 360px;
        width: 100%;
        border: 1px solid #e3e3e3;
        position: relative;
        overflow-y: scroll;
    }

    .selected_goods {
        margin: 40px 20px;

    }

    .selected_goods_list {
        font-size: 0;
    }

    .selected_goods_list li {
        position: relative;
        width: 260px;
        height: 60px;
        font-size: 0px;
        border: 1px solid #e3e3e3;
        margin: 10px calc(((100% / 3) - 282px) / 2);
        padding: 10px;
        box-sizing: content-box;
    }

    .selected_list_left {
        width: 60px;
        height: 100%;
        display: inline-block;
    }

    .selected_list_left img {
        width: 60px;
        height: 60px;
    }

    .selected_list_right {
        width: 190px;
        height: 100%;
        margin-left: 10px;
        float: right;
    }

    .selected_list_title {
        display: inline-block;
        font-size: 12px;
        color: #848c97;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .close_btn {
        position: absolute;
        right: -7px;
        top: -8px;
        display: inline-block;
    }

    .close_btn img {
        width: 15px;
        height: 15px;
    }
    .copy{
        border: none;font-size: 12px; color: #848c97;width: 100%
    }
    .copy:hover{
        background-color: #e9f1f3;
        color: #0f8edd;
    }
    .copyText{
        width: 250px;
        color: white;
        font-size: 12px;
        box-sizing: content-box;
        word-wrap: break-word;
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
