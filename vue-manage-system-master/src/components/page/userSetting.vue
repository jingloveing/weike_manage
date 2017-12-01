<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">账号设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <div class="ms-doc_main">
                <p><span class="title">登录账号：</span>{{username}}</p>
                <p><span class="title" style="float: left;margin-top: 20px;">头像：</span><img src="/static/img/default_img.png" alt="" class="photo">
                    <input id="file" type="file"  style="display: none" @change="uploadImg($event)" multiple accept="image/*">
                    <label class="operate" for="file">上传头像</label></p>
                <p><span class="title">昵称：</span><el-input v-model="title" style="width: 300px;margin: 20px 0;"></el-input>
                    <label class="operate">修改昵称</label></p>
                <p><span class="title">密码：</span><el-input v-model="title" style="width: 300px;margin: 20px 0;"  type="keywords"></el-input>
                    <label class="operate" v-on:click="toShow()">修改密码</label></p>
                <div v-show="isShow">
                    <p><span class="title">当前密码：</span><el-input v-model="title" style="width: 300px;margin: 20px 0;" placeholder="6-14个英文和数字组合" type="keywords"></el-input></p>
                    <p><span class="title">新密码：</span><el-input v-model="title" style="width: 300px;margin: 20px 0;" placeholder="6-14个英文和数字组合" type="keywords"></el-input></p>
                    <p><span class="title">确认新密码：</span><el-input v-model="title" style="width: 300px;margin: 20px 0;" placeholder="请再次输入新密码" type="keywords"></el-input></p>

                </div>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" round
                           style="background-color: #0f8edd;border-color: #0f8edd;margin-bottom: 50px;">保存
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
                isShow: false,
                name:''
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
           }
        },
        mounted() {
        },
        created: function () {

        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
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
    .title{
        display: inline-block;width: 150px;text-align: right;
    }
    .photo{
        width: 80px;
        height: 80px;
        margin-top: 20px;
    }
    .operate{
        font-size: 14px;
        color: #0f8edd;
        margin-left: 20px;
    }
</style>
