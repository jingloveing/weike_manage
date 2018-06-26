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
                        <div style="margin-bottom: 20px;" v-for="(i,index) in bannerList">
                            <div style="position: relative;">
                                <div class="upload_img">
                                    <img :src="i.banner_image" alt="" style="width: 100%;height: 100%;">
                                </div>
                                <input :id="'banner'+index" type="file"  style="display: none" @change="uploadImg($event,index)" multiple accept="image/*">
                                <label :for="'banner'+index" class="upload_btn">上传</label>
                            </div>
                            <span style="font-size: 14px;">跳转链接：</span>
                            <el-input placeholder="请输入链接" v-model="i.banner_url" style="width: 300px;margin:0 20px;">
                                <!--<template slot="prepend">http://</template>-->
                            </el-input>
                            <el-button type="danger" @click="del1(index)">删除组</el-button>
                        </div>
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="add1()">增加组
                        </el-button>
                    </div>
                    <div style="text-align: center;padding: 20px 0;">
                        <el-button type="primary" round
                                   style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="saveBanner()">保存
                        </el-button>
                    </div>
                </div>
                <div class="left_2">
                    <p class="m_title">首页分类图标
                        <small>点击图片更改分类图标</small></p>
                    <div class="left_main" style="border: none;">
                        <div style="width: 100%;height: 318px;">
                            <ul class="nav-small">
                                <li v-for="(type,index) in index_cate" style="margin-bottom: 40px;">
                                    <img :src="type.image_url" style="width: 60px;height: 60px;" @click="selected(type.id)">
                                    <span style="font-size: 14px;">{{type.cate_name}}</span>
                                </li>
                            </ul>
                            <!--<el-button type="success" round style="margin-left: 50px;" @click="getAllCateType()">创建二级分类-->
                            <!--</el-button>-->
                        </div>
                    </div>
                    <!--<div style="text-align: center;padding: 20px 0;">-->
                        <!--<el-button type="primary" round-->
                                   <!--style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="saveCate()">保存-->
                        <!--</el-button>-->
                        <!--&lt;!&ndash;<el-button type="primary" round&ndash;&gt;-->
                                   <!--&lt;!&ndash;style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">预览&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-button>&ndash;&gt;-->
                    <!--</div>-->
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
                                        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                                            <img :src="item.banner_image" alt="" width="100%" height="100%">
                                        </el-carousel-item>
                                    </el-carousel>
                                    <div style="width: 100%;height: 175px;">
                                        <ul class="nav-small">
                                            <li v-for="(type,index) in index_cate">
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
            :before-close="handleClose1" style="min-width: 1300px;">
            <div class="imgList">
               <div class="tab" v-for="(list,index) in all_type">
                  <div class="check" v-show="list.checked">
                      <img src="/static/img/checked_img.png" alt="">
                  </div>
                   <div @click="isChecked(index)" :class="list.checked?'active':''">
                       <img :src="list.image_url" alt="">
                   </div>
                   <p class="img_name">{{list.cate_name}}</p>
               </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1=false">取 消</el-button>
    <el-button type="primary" @click="sure()" style="background-color: #0f8edd;border-color: #0f8edd;">确 定</el-button>
  </span>
        </el-dialog>
        <!--&lt;!&ndash;创建二级菜单弹出框&ndash;&gt;-->
        <!--<el-dialog-->
            <!--title="二级分类菜单"-->
            <!--:visible.sync="dialogVisible2" style="min-width:1100px;">-->
            <!--<div>-->
               <!--<div class="model_left">-->
                    <!--<ul>-->
                        <!--<li :class="indexs==index ? activeClass:''" v-on:click="navClickEvent(index_cate,index)" :key="index" v-for="(item,index) in child_cate">{{item.cate_name}}</li>-->
                    <!--</ul>-->
               <!--</div>-->
                <!--<div class="model_right">-->
                    <!--<p style="margin-bottom: 10px;">{{child_cate[indexs].cate_name}}</p>-->
                    <!--<div id="model_list">-->
                        <!--<input type="text" class="model_input" v-for="(item,index) in child_cate[indexs].child" v-model="item.cate_name">-->
                    <!--</div>-->
                   <!--<div>-->
                       <!--<img src="/static/img/add.png" alt="" style="margin:2px 20px;" @click="add()">-->
                       <!--<img src="/static/img/del.png" alt="" style="margin:2px 10px;" @click="del()">-->
                   <!--</div>-->
                    <!--<div style="position: absolute;bottom: 7px;text-align: center;width: 100%;">-->
                        <!--<el-button type="primary" @click="" style="background-color: #0f8edd;border-color: #0f8edd;" @click="saveCateType()">保存</el-button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<span slot="footer" class="dialog-footer"></span>-->
        <!--</el-dialog>-->
    </div>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                indexs:0,
                activeClass:'selected',
                dialogVisible1: false,
                dialogVisible2: false,
                input: '',
                name:'',
                bannerList:[],
                all_type:[],
                index_cate:[],
                index:'',
                old_id:'',
                new_id:'',
                child_cate:[
                    {
                        cate_name:'',
                        child:[
                            {
                                cate_name:''
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            //      获取banner列表
            getBannerList: function () {
                this.$ajax.get('/api/Index/indexBanner').then((res) => {
                    if (res.data.code == '200') {
                        this.bannerList = res.data.data.banner_list
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取当前分类列表
            getCateType: function () {
                this.$ajax.get('/api/Index/setCateType').then((res) => {
                    if (res.data.code == '200') {
                        this.index_cate = res.data.data.index_cate
                    }
                }, (err) => {
                    console.log(err)
                })
            },
//            //      获取创建二级菜单弹框当前分类列表
//            getAllCateType: function () {
//                this.dialogVisible2 = true
//                this.$ajax.get('/api/Index/createChildCate').then((res) => {
//                    if (res.data.code == '200') {
//                        this.child_cate = res.data.data.child_cate
//                    }
//                }, (err) => {
//                    console.log(err)
//                })
//            },
//            //      保存创建二级菜单弹框当前分类列表
//            saveCateType: function () {
//                let cate_id = this.child_cate[this.indexs].id
//                let new_cate = this.child_cate[this.indexs].child
//                this.$ajax.post('/api/Index/createChildCate',{cate_id:cate_id,child_cate:new_cate}).then((res) => {
//                    if (res.data.code == '200') {
//                        this.$message({
//                            message: res.data.data.message,
//                            type: 'success'
//                        });
//                    }else{
//                        this.$message({
//                            message: res.data.error,
//                            type: 'error'
//                        });
//                    }
//                }, (err) => {
//                    console.log(err)
//                })
//            },
            //      保存banner列表
            saveBanner: function () {
                this.$ajax.post('/api/Index/indexBanner',this.bannerList).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
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
//            上传图片
            uploadImg:function(e,index){
                const formData = new FormData();
                formData.append('images',e.target.files[0]);
                let config ={
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                console.log(index)
                this.$ajax.post('api/Index/upload', formData, config).then((res)=>{
                    if(res.data.code=='200'){
                        this.bannerList[index].banner_image=res.data.data.image_url
                        console.log(this.bannerList)

                    }
                },(err)=>{})
            },
//            关闭选择图标弹框
            handleClose1(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.old_id=''
                        this.new_id=''
                        done();
                    })
                    .catch(_ => {});
            },
//            选择图标
            isChecked(index){
                for(var i=0;i<this.all_type.length;i++){
                    this.all_type[i].checked=false
                }
                this.all_type[index].checked=!this.all_type[index].checked
                this.new_id=this.all_type[index].id

            },
//            点击选择图标确定按钮
            sure(){
//                console.log()
                this.$ajax.post('/api/Index/setCateType',{old_id:this.old_id,new_id:this.new_id}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.old_id=''
                        this.new_id=''
                        this.getCateType()
                        this.dialogVisible1 = false
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                        this.old_id=''
                        this.new_id=''
                        this.dialogVisible1 = false
                    }
                }, (err) => {
                    console.log(err)
                })
            },
//            修改二级分类列表tab选项卡
//            navClickEvent:function(index_cate,index){
//                /*默认切换类的动作*/
//                this.indexs=index
////                index_cate.forEach(function(el){
////                    el.active = false;
////                });
////                index_cate[index].active = true;
////                console.log(index_cate,index)
////                this.name=index_cate[index].text
////                console.log(this.name)
//            },
            add(){
                this.child_cate[this.indexs].child.push({
                    cate_name: null
                })
            },
            add1(){
                this.bannerList.push({
                    banner_image:'',
                    banner_url:''
                })
            },
            del(){
                this.child_cate[this.indexs].child.pop()
            },
            del1(index){
                this.bannerList.splice(index,1)
            },
//            获取全部图标分类
            selected(id){
                this.old_id = id
                this.dialogVisible1=true
                this.$ajax.get('/api/Index/allCateType').then((res) => {
                    if (res.data.code == '200') {
                        this.all_type = res.data.data.all_type
                    }
                }, (err) => {
                    console.log(err)
                })

            },
        },
        mounted() {
//            this.name=this.items[0].text
        },
        created:function(){
            this.getBannerList()
            this.getCateType()
        }
    }
</script>
<style scoped>
    .ms-doc {
        /*max-width: 980px;*/
        /*max-width: 1300px;*/
        width: 1300px;
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
    .upload_btn{
        font-size: 14px;background-color: #0f8edd;border-color: #0f8edd;position: absolute;bottom: 30px;display: inline-block;padding: 8px 15px;
        color: white;
        border-radius: 5px;
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
        font-size: 10px;
        color: #333333;
        display: block;
    }
    .imgList{
        font-size: 0;
    }
    .tab{
        width: 18%;
        /*width: 130px;*/
        height: 132px;
        margin: 5px calc(((100%/5) - 18%)/2);
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
        min-height: 362px;
        border: 1px solid #e9f1f3;
        padding: 20px;
        font-size: 0;
        position: relative;
    }
    .model_left ul li{
        list-style: none;
        font-size: 14px;
        color: #54667a;
        padding: 10px 20px;
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
