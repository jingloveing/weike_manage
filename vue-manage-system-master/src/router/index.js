import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/admin/login'
        },
        {
            path: '/admin/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/admin/home',
                    component: resolve => require(['../components/page/home/HomePage.vue'], resolve)
                },
                {
                    path: '/admin/goodsData',
                    component: resolve => require(['../components/page/data_analysis/goodsData.vue'], resolve)
                },
                {
                    path: '/admin/userData',
                    component: resolve => require(['../components/page/data_analysis/userData.vue'], resolve)
                },
                {
                    path: '/admin/shareListData',
                    component: resolve => require(['../components/page/data_analysis/shareListData.vue'], resolve)
                },
                {
                    path: '/admin/signData',
                    component: resolve => require(['../components/page/data_analysis/signData.vue'], resolve)
                },
                {
                    path: '/admin/searchData',
                    component: resolve => require(['../components/page/data_analysis/searchData.vue'], resolve)
                },
                {
                    path: '/admin/goodsManage',
                    component: resolve => require(['../components/page/manageOperate/goodsManage.vue'], resolve)
                },{
                    path: '/admin/orderManage',
                    component: resolve => require(['../components/page/manageOperate/orderManage.vue'], resolve)
                },{
                    path: '/admin/shareListManage',
                    component: resolve => require(['../components/page/manageOperate/shareListManage.vue'], resolve)
                },{
                    path: '/admin/subjectManage',
                    component: resolve => require(['../components/page/manageOperate/subjectManage.vue'], resolve)
                },{
                    path: '/admin/indexManage',
                    component: resolve => require(['../components/page/manageOperate/indexManage.vue'], resolve)
                },{
                    path: '/admin/exchangeManage',
                    component: resolve => require(['../components/page/manageOperate/exchangeManage.vue'], resolve)
                },{
                    path: '/admin/signManage',
                    component: resolve => require(['../components/page/manageOperate/signManage.vue'], resolve)
                },
                {
                    path: '/admin/integralManage',
                    component: resolve => require(['../components/page/manageOperate/integralManage.vue'], resolve)
                },
                {
                    path: '/admin/fansWelfareManage',
                    component: resolve => require(['../components/page/manageOperate/fansWelfareManage.vue'], resolve)
                },
                {
                    path: '/admin/accessManage',
                    component: resolve => require(['../components/page/accessControl/accessManage.vue'], resolve)
                },
                {
                    path: '/admin/userManage',
                    component: resolve => require(['../components/page/accessControl/userManage.vue'], resolve)
                },
                {
                    path: '/admin/manager',
                    component: resolve => require(['../components/page/accessControl/manager.vue'], resolve)
                },
                {
                    path: '/admin/props',
                    component: resolve => require(['../components/page/props.vue'], resolve)
                },
                {
                    path: '/admin/releaseNotes',
                    component: resolve => require(['../components/page/releaseNotes.vue'], resolve)
                },
                {
                    path: '/admin/userSetting',
                    component: resolve => require(['../components/page/userSetting.vue'], resolve)
                },
                {
                    path: '/admin/notice',
                    component: resolve => require(['../components/page/notice.vue'], resolve)
                },
                {
                    path: '/admin/menuSetting',
                    component: resolve => require(['../components/page/menuManage/menuSetting.vue'], resolve)
                },
                {
                    path: '/admin/menuSort',
                    component: resolve => require(['../components/page/menuManage/menuSort.vue'], resolve)
                },
                {
                    path: '/admin/goodsSetting',
                    component: resolve => require(['../components/page/goodsSetting.vue'], resolve)
                }
            ]
        },
        {
            path: '/admin/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
