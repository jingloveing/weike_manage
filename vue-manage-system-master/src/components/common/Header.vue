<template>
    <div class="header">
        <div class="logo"><img src="/static/img/logo.png" alt=""></div>
         <div class="nav">
             <span><img src="/static/img/setting_img.png" alt="">设置</span>
             <span v-on:click="toprops()"><img src="/static/img/prop_img.png" alt="">参数</span>
             <span><img src="/static/img/num_img.png" alt="">库存：893430</span>
         </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="/static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="userSetting" class="dropdown"><img src="/static/img/setting_s.png" alt="" style="margin-right: 10px;"><span>账号设置</span></el-dropdown-item>
                    <el-dropdown-item command="loginout" class="dropdown"><img src="/static/img/quit.png" alt="" style="margin-right: 10px;">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
       <div style="float: right;margin-right: 50px;position: relative;cursor: pointer;" @click="toNotice()">
           <img src="/static/img/info_img.png" alt="" style="width: 20px;height: 16px;">
           <span class="info_num"></span>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    this.$ajax.post('/api/User/logout').then((res)=>{
                        if(res.data.code=='200'){
                            localStorage.removeItem('ms_username')
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
                    const ur = "/props";
                    this.$router.push({ path: ur })
            },
            toNotice(){
                const ur = "/notice";
                this.$router.push({ path: ur })
            }
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
</style>
