<template>
    <div class="sidebar" style="padding-left: 14px;">
        <!--<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>-->
            <!--<template v-for="item in items">-->
                <!--<template v-if="item.subs">-->
                    <!--<el-submenu :index="item.index">-->
                        <!--&lt;!&ndash;<template slot="title"><img :src="item.src" alt="">{{ item.title }}</template>&ndash;&gt;-->
                        <!--<template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>-->
                        <!--<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}-->
                        <!--</el-menu-item>-->
                    <!--</el-submenu>-->
                <!--</template>-->
                <!--<template v-else>-->
                    <!--<el-menu-item :index="item.index">-->
                        <!--<i :class="item.icon"></i>{{ item.title }}-->
                    <!--</el-menu-item>-->
                <!--</template>-->
            <!--</template>-->
        <!--</el-menu>-->
<!--@open="handleOpen" @close="handleClose" @select="handleSelect"-->
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item._data&&item._data.length!==0">
                    <el-submenu :index="item.url">
                        <template slot="title">
                            <!--<img :src="item.icon_blue" alt="" style="width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;">-->
                            <!--<img :src="item.icon" alt="" style="width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;">-->
                            {{ item.name }}</template>
                        <el-menu-item v-for="(subItem,i) in item._data" :key="i" :index="subItem.url">{{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.url" v-on:click="selected = !selected">
                        <!--<img :src="item.icon_blue" alt="" style="width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;">-->
                        <!--<img :src="item.icon" alt="" style="width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;">-->
                        {{ item.name }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
//                items: [
//                    {
//                       icon:'el-icon-date',
//                        index: 'home',
//                        title: '首页'
//                    },
//                    {
//                        icon: 'el-icon-date',
//                        index: '2',
//                        title: '数据分析',
//                        subs: [
//                            {
//                                index: 'goodsData',
//                                title: '商品数据'
//                            },
//                            {
//                                index: 'userData',
//                                title: '用户数据'
//                            },
//                            {
//                                index: 'shareListData',
//                                title: '晒单数据'
//                            },
//                            {
//                                index: 'signData',
//                                title: '签到数据'
//                            },
//                            {
//                                index: 'searchData',
//                                title: '搜索数据'
//                            },
//                            {
//                                index: 'vuetable',
//                                title: '分销数据'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-date',
//                        index: '3',
//                        title: '管理操作',
//                        subs: [
//                            {
//                                index: 'goodsManage',
//                                title: '商品管理 '
//                            },
//                            {
//                                index: 'orderManage',
//                                title: '订单管理'
//                            },
//                            {
//                                index: 'shareListManage',
//                                title: '晒单管理'
//                            },
//                            {
//                                index: 'subjectManage',
//                                title: '专场页管理'
//                            },
//                            {
//                                index: 'indexManage',
//                                title: '首页管理'
//                            },
//                            {
//                                index: 'exchangeManage',
//                                title: '兑换商城管理'
//                            },
//                            {
//                                index: 'signManage',
//                                title: '签到管理'
//                            },
//                            {
//                                index: 'integralManage',
//                                title: '积分管理'
//                            },
//                            {
//                                index: 'fansWelfareManage',
//                                title: '粉丝福利管理'
//                            },
//                            {
//                                index: 'superLineManage',
//                                title: '超值线报管理'
//                            },
//                            {
//                                index: 'upload',
//                                title: '分销管理'
//                            },
//                            {
//                                index: 'upload',
//                                title: '推广管理'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-star-on',
//                        index: 'basecharts',
//                        title: '插件功能'
//                    },
//                    {
//                        icon: 'el-icon-menu',
//                        index: '4',
//                        title: '权限控制',
//                        subs: [
//                            {
//                                index: 'accessManage',
//                                title: '权限管理'
//                            },
//                            {
//                                index: 'userManage',
//                                title: '用户组管理'
//                            },
//                            {
//                                index: 'manager',
//                                title: '管理员列表'
//                            }
//                        ]
//                    },{
//                        icon: 'el-icon-menu',
//                        index: '5',
//                        title: '菜单管理',
//                        subs: [
//                            {
//                                index: 'menuSort',
//                                title: '菜单排序'
//                            },
//                            {
//                                index: 'menuSetting',
//                                title: '菜单设置'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-upload2',
//                        index: 'releaseNotes',
//                        title: '发布消息'
//                    }
//                ],
                selected:false,
                items:[],
            }
        },
        methods:{
            getSiderbarList:function(){
                this.$ajax.post('/api/Menu/index').then((res)=>{
                    if(res.data.code=='200'){
                        this.items = res.data.data.menu
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                },(err)=>{

                })
            },
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        mounted(){

        },
        created:function(){
            this.getSiderbarList()
        }
    }
</script>

<style scoped>
    .el-menu{
        background-color: white;
    }
    .sidebar{
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 70px;
        bottom:0;
        background-color: white;
    }
    .sidebar > ul {
        height:100%;
    }
    .s-active+.img2{
        visibility: visible;
    }
    .s-active+.img1{
        visibility: hidden;
    }
</style>
<style>
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #0f8edd;
    }
    .el-submenu__title{
        color: #a6afbb;
    }
    .el-menu-item{
        color: #a6afbb;
    }
</style>
