<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">首页管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <div class="left">
                <div class="left_1">
                    <p class="m_title">首页轮播海报图
                        <small>尺寸建议：750*260像素;类型要求：jpg.png,3M内大小</small>
                    </p>
                    <div class="left_main">
                        <div style="margin-bottom: 20px;" v-for="(i,index) in item1" v-model="item1[index].value">
                            <div style="position: relative;">
                                <div class="upload_img">

                                </div>
                                <el-button type="primary"
                                           style="background-color: #0f8edd;border-color: #0f8edd;position: absolute;bottom: 30px;">
                                    上传
                                </el-button>
                            </div>
                            <span style="font-size: 14px;">跳转链接：</span>
                            <el-input placeholder="请输入链接" v-model="input" style="width: 300px;margin:0 20px;">
                                <template slot="prepend">http://</template>
                            </el-input>
                            <el-button type="danger" @click="del1(index)">删除组</el-button>
                        </div>
                        <!--<div style="margin-bottom: 20px;">-->
                            <!--<div style="position: relative;">-->
                                <!--<div class="upload_img">-->

                                <!--</div>-->
                                <!--<el-button type="primary"-->
                                           <!--style="background-color: #0f8edd;border-color: #0f8edd;position: absolute;bottom: 30px;">-->
                                    <!--上传-->
                                <!--</el-button>-->
                            <!--</div>-->
                            <!--<span style="font-size: 14px;">跳转链接：</span>-->
                            <!--<el-input placeholder="请输入链接" v-model="input" style="width: 300px;margin:0 20px;">-->
                                <!--<template slot="prepend">http://</template>-->
                            <!--</el-input>-->
                        <!--</div>-->
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="add1()">增加组
                        </el-button>
                    </div>
                    <div style="text-align: center;padding: 20px 0;">
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">保存
                        </el-button>
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">预览
                        </el-button>
                    </div>
                </div>
                <div class="left_2">
                    <p class="m_title">首页分类图标</p>
                    <div class="left_main">
                        <div style="width: 100%;height: 318px;">
                            <ul class="nav-small">
                                <li v-for="type in 10" style="margin-bottom: 40px;">
                                    <!-- :onerror="defaultImg"-->
                                    <img src="/static/img/add_img.png" style="width: 60px;height: 60px;" @click="dialogVisible1 = true">
                                    <span style="font-size: 14px;">分类{{type}}</span>
                                </li>
                            </ul>
                            <el-button type="success" round style="margin-left: 50px;" @click="dialogVisible2 = true">创建二级分类
                            </el-button>
                        </div>
                    </div>
                    <div style="text-align: center;padding: 20px 0;">
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">保存
                        </el-button>
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">预览
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="right">
                <p class="m_title">效果预览</p>
                <div class="right_main">
                    <div class="phone">
                        <div class="phone_main">
                            <div class="part1">
                                <div class="block">
                                    <el-carousel height="130px">
                                        <el-carousel-item v-for="(item,index) in imgList" :key="index">
                                            <img :src="item.url" alt="" width="100%" height="100%">
                                        </el-carousel-item>
                                    </el-carousel>
                                    <div style="width: 100%;height: 175px;">
                                        <ul class="nav-small">
                                            <li v-for="type in typeList">
                                                <!-- :onerror="defaultImg"-->
                                                <img :src="type.image_url">
                                                <span>{{type.cate_name}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--选择图标分类弹出框-->
        <el-dialog
            title="选择图标"
            :visible.sync="dialogVisible1"
            width="30%"
            :before-close="handleClose">
            <div class="imgList">
               <div class="tab" v-for="i in 10">
                  <div class="check" v-show=" checked">
                      <img src="/static/img/checked_img.png" alt="">
                  </div>
                   <div @click="isChecked()" :class="checked?'active':''">
                       <img src="/static/img/img.jpg" alt="">
                   </div>
                   <p class="img_name">热门</p>
               </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false" style="background-color: #0f8edd;border-color: #0f8edd;">确 定</el-button>
  </span>
            <!--创建二级菜单弹出框-->
        </el-dialog>
        <el-dialog
            title="二级分类菜单"
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <div>
               <div class="model_left">
                    <ul v-for="(item,index) in items">
                        <li :class="[item.active ? activeClass:'']" v-on:click="navClickEvent(items,index)">{{item.text}}</li>
                    </ul>
               </div>
                <div class="model_right">
                    <p>{{name}}</p>
                    <div id="model_list">
                        <input type="text" class="model_input" v-for="(i,index) in item" v-model="item[index].value">
                    </div>
                    <img src="/static/img/add.png" alt="" style="margin:0 20px;" @click="add()">
                    <img src="/static/img/del.png" alt="" style="margin:0 10px;" @click="del()">

                </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible2= false" style="background-color: #0f8edd;border-color: #0f8edd;">保存</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {
                activeClass:'selected',
                items:[
                    {
                        text: '热门',
                        active : true
                    },
                    {
                        text: '服饰',
                        active : false
                    },
                    {
                        text: '家居',
                        active : false
                    },
                    {
                        text: '家纺',
                        active : false
                    },
                    {
                        text: '母婴',
                        active : false
                    },
                    {
                        text:'电器',
                        active:false
                    }
                ],
                item:[
                    {
                        value:''
                    },
                    {
                        value:''
                    },
                    {
                        value:''
                    },
                    {
                        value:''
                    },
                    {
                        value:''
                    }
                ],
                item1:[
                    {
                        value:''
                    },
                    {
                        value:''
                    }
                ],
                title:'',
                checked:false,
                dialogVisible1: false,
                dialogVisible2: false,
                input: '',
//                defaultImg: 'this.src="' + require('../../static/img/default_img.png') + '"',
                imgList:[
                    {
                        url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg"
                    },
                    {
                        url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg"
                    },
                    {
                        url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg"
                    },
                    {
                        url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg"
                    }
                ],
                typeList:[
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },
                    {
                        image_url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
                        cate_name:"热门"
                    },

                ],
                name:''
            }
        },
        methods:{
//            上传图片 将路径赋给他前面的img图片







            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            isChecked(){
                this.checked=!this.checked

            },
            navClickEvent:function(items,index){
                /*默认切换类的动作*/
                items.forEach(function(el){
                    el.active = false;
                });
                items[index].active = true;
                console.log(items,index)
                this.name=items[index].text
                console.log(this.name)
            },
            add(){
                this.item.push({
                    value: null
                })
            },
            add1(){
                this.item1.push({
                    value: null
                })
            },
            del(){
                this.item.shift()
            },
            del1(index){
                console.log(index)
                this.item1.splice(index,1)
            }
        },
        mounted() {
            this.name=this.items[0].text
        },
        created:function(){

        }
    }
</script>
<style scoped>
    .ms-doc {
        /*max-width: 980px;*/
        /*max-width: 1300px;*/
        width: 1300px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        padding: 0 40px;
        color: #54667a;
    }

    .left {
        width: 604px;
        float: left;
        margin-right: 20px;
    }
    .left_1,.left_2{
        background-color: white;
        padding: 0 20px;
    }
    .left_2{
        margin-top: 20px;
    }
    .m_title {
        font-size: 20px;
        color: #54667a;
        line-height: 60px;
        border-bottom: 1px solid #e9f1f3;
    }

    .m_title small {
        font-size: 12px;
        color: #a6afbb;
        margin-left: 10px;
    }

    .left_main {
        padding: 20px;
        border: 1px solid #e9f1f3;
        margin: 20px 0;
    }

    .title small {
        color: #a6afbb;
        font-size: 14px;
        margin-left: 10px;
    }

    .right {
        float: left;
        background-color: white;
        width: 510px;
        padding: 0 20px;
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

    /*手机模拟页面样式*/
    .phone {
        width: 430px;
        height: 880px;
        background-image: url("/static/img/index_phone.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: 30px auto;
        position: relative;
    }

    .phone_main {
        position: absolute;
        top: 171px;
        left: 28px;
        width: 375px;
        height: 305px;
        font-size: 0;
    }



    .nav-small {
        overflow: hidden;
        padding: 22px 1px 1px 2px;
        background-color: white;
    }

    .nav-small li {
        margin-bottom: 20px;
        width: 20%;
        float: left;
        list-style: none;
        text-align: center;
    }

    .nav-small li img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto;
    }

    .nav-small li span {
        font-size: 12px;
        color: #333333;
        display: block;
    }
    .imgList{
        font-size: 0;
    }
    .tab{
        width: 130px;
        height: 132px;
        margin: 5px calc(((100%/5) - 130px)/2);
        border: 1px solid #e9f1f3;
        text-align: center;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
    }
    .tab img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin: 20px auto;
    }
    .img_name{
        font-size: 16px;
        color: #54667a;
        border-top: 1px solid #e9f1f3;
    }
    .check{
        position: absolute;right: 10px;top: 10px;right: 8px;top: -13px;
    }
    .check img{
        width: 20px;
        height: 20px;
    }
    .active{
        background-color: black;
        opacity: 0.3;
    }
    .model_left{
        width: 30%;
        min-height: 400px;
        border: 1px solid #e9f1f3;
        display: inline-block;
    }
    .model_right{
        float: right;
        width: 60%;
        min-height: 400px;
        border: 1px solid #e9f1f3;
        padding: 20px;
        font-size: 0;
    }
    .model_left ul{
        margin: 20px 0;
    }
    .model_left ul li{
        list-style: none;
        font-size: 14px;
        color: #54667a;
        padding: 0px 20px;
    }
    .selected{
        background-color: #f2f7f8;
    }
    .model_right p{
        font-size: 14px;
        color: #54667a;
    }
    .model_input{
        width: 100px;
        padding: 0 10px;
        line-height: 25px;
        border: 1px solid #e9f1f3;
        outline: none;
        margin: 20px 15px;
        box-sizing: border-box;
        color: #54667a;
    }
    #model_list{
        display: inline-block;
    }
</style>
<style>
    .el-carousel__button {
        display: block;
        width: 5px;
        height: 5px;
        background-color: #fff;
        border-radius: 50%;
    }
</style>
