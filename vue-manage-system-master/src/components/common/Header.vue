<template>
    <div class="header">
        <div class="logo"><img src="/static/img/logo.png" alt=""></div>
         <div class="nav">
             <span v-on:click="goodsSetting()"><img src="/static/img/num_img.png" alt="">商品采集</span>
             <span v-on:click="toprops()"><img src="/static/img/prop_img.png" alt="">参数设置</span>
             <span style="margin-left: 20px;">库存：{{num}}</span>
         </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" :src="userPhoto" :onerror="defaultImg">
                    {{nickname}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="userSetting" class="dropdown"><img src="/static/img/setting_s.png" alt="" style="margin-right: 10px;"><span>账号设置</span></el-dropdown-item>
                    <el-dropdown-item command="loginout" class="dropdown"><img src="/static/img/quit.png" alt="" style="margin-right: 10px;">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
       <div style="float: right;margin-right: 50px;position: relative;cursor: pointer;" @click="toNotice()">
           <img src="/static/img/info_img.png" alt="" style="width: 20px;height: 16px;">
           <span class="info_num" v-show="message.count"></span>
       </div>
        <div class="notice" v-show="message.count" id="notice">
            <img src="/static/img/top_triangle.png" alt="" style="position: absolute;top: -7px;right: 56px;">
            <p><i class="round"></i> {{message.message.title}}</p>
            <img src="/static/img/close_btn.png" alt="" style="width: 10px;height: 10px;position: absolute;top:5px;right: 5px;" @click="message.count=!message.count">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShow:true,
                name: '',
                userPhoto:'',
                nickname:'',
                defaultImg:'this.src="'+require('../../../static/img/default_img.png')+'"',
                num:'',
                message:{
                    count:'',
                    message:{
                        title:''
                    }
                }
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            //      获取数据库内商品总数
            getNum: function () {
                this.$ajax.post('/api/Goods/goodsCount').then((res) => {
                    if (res.data.code == '200') {
                        this.num=res.data.data.count
                    }else{
                        this.num=null
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //      获取最新未读消息
            getMessage: function () {
                this.$ajax.post('/api/Menu/unreadMessage').then((res) => {
                    if (res.data.code == '200') {
                        this.message=res.data.data
                    }else{
                        this.num=null
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    this.$ajax.post('/api/User/logout').then((res)=>{
                        if(res.data.code=='200'){
                            localStorage.clear()
                            this.$router.push('/login');
                        }else{
                            this.$message({
                                message: res.data.error,
                                type: 'error'
                            });
                        }
                    },(err)=>{

                    })

                }else if(command == 'userSetting'){
                    this.$router.push('/userSetting');
                }
            },
            toprops(){
                    const url = "/props";
                    this.$router.push({ path: url })
            },
            toNotice(){
                const url = "/notice";
                this.$router.push({ path: url })
            },
            goodsSetting(){
                const url="/goodsSetting";
                this.$router.push({ path: url })
            }
        },
        created:function(){
            this.userPhoto = localStorage.getItem('ms_userPhoto');
            this.nickname = localStorage.getItem('ms_nickname');
            this.getNum()
            this.getMessage()
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background-image: url('/static/img/h_bd.png');
        background-size: 100% 100%;
        padding-left: 34px;
    }
    .header .logo{
        float: left;
        overflow: hidden;
        text-align: center;
        margin-right: 50px;
    }
    .logo img{
        width: 172px;
        height: 34px;
        vertical-align: middle;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .nav{
        font-size: 14px;
        color: white;
        display: inline-block;
        cursor: pointer;
    }
    .nav img{
        width:20px;
        height: 20px;
        vertical-align: middle;
        margin:0 10px 0 20px;
    }
    .info_num{
        background-color: #fc4b6c;
        border-radius: 50%;
        position: relative;
        top:-10px;
        left: -10px;
        width: 10px;
        height: 10px;
        display: inline-block;
    }
    .dropdown:nth-child(1){
        border-bottom: 1px solid #e9f1f3;
    }
    .dropdown{
        font-size: 12px;color: #54667a;line-height: 30px;
    }
    .round{
        margin:0 10px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #fc4b6c;
        border-radius: 50%;
    }
    .notice{
        width: 300px;
        line-height: 60px;
        padding:0px 20px;
        right: 180px;
        position: fixed;
        top:72px;
        background-color: white;
        border: 1px solid #e9f1f3;
        z-index: 10000;
        font-size: 12px;
    }
    .notice p{
        color: #54667a;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
