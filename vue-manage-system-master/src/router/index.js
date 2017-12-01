import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/333',
                    component: resolve => require(['../components/page/home/HomePage.vue'], resolve)
                },
                {
                    path: '/goodsData',
                    component: resolve => require(['../components/page/data_analysis/goodsData.vue'], resolve)
                },
                {
                    path: '/userData',
                    component: resolve => require(['../components/page/data_analysis/userData.vue'], resolve)
                },
                {
                    path: '/shareListData',
                    component: resolve => require(['../components/page/data_analysis/shareListData.vue'], resolve)
                },
                {
                    path: '/signData',
                    component: resolve => require(['../components/page/data_analysis/signData.vue'], resolve)
                },
                {
                    path: '/searchData',
                    component: resolve => require(['../components/page/data_analysis/searchData.vue'], resolve)
                },
                {
                    path: '/goodsManage',
                    component: resolve => require(['../components/page/manageOperate/goodsManage.vue'], resolve)
                },{
                    path: '/orderManage',
                    component: resolve => require(['../components/page/manageOperate/orderManage.vue'], resolve)
                },{
                    path: '/shareListManage',
                    component: resolve => require(['../components/page/manageOperate/shareListManage.vue'], resolve)
                },{
                    path: '/subjectManage',
                    component: resolve => require(['../components/page/manageOperate/subjectManage.vue'], resolve)
                },{
                    path: '/indexManage',
                    component: resolve => require(['../components/page/manageOperate/indexManage.vue'], resolve)
                },{
                    path: '/exchangeManage',
                    component: resolve => require(['../components/page/manageOperate/exchangeManage.vue'], resolve)
                },{
                    path: '/signManage',
                    component: resolve => require(['../components/page/manageOperate/signManage.vue'], resolve)
                },
                {
                    path: '/integralManage',
                    component: resolve => require(['../components/page/manageOperate/integralManage.vue'], resolve)
                },
                {
                    path: '/fansWelfareManage',
                    component: resolve => require(['../components/page/manageOperate/fansWelfareManage.vue'], resolve)
                },
                {
                    path: '/accessManage',
                    component: resolve => require(['../components/page/accessControl/accessManage.vue'], resolve)
                },
                {
                    path: '/userManage',
                    component: resolve => require(['../components/page/accessControl/userManage.vue'], resolve)
                },
                {
                    path: '/manager',
                    component: resolve => require(['../components/page/accessControl/manager.vue'], resolve)
                },
                {
                    path: '/props',
                    component: resolve => require(['../components/page/props.vue'], resolve)
                },
                {
                    path: '/releaseNotes',
                    component: resolve => require(['../components/page/releaseNotes.vue'], resolve)
                },
                {
                    path: '/userSetting',
                    component: resolve => require(['../components/page/userSetting.vue'], resolve)
                },
                {
                    path: '/notice',
                    component: resolve => require(['../components/page/notice.vue'], resolve)
                },
                {
                    path: '/menuSetting',
                    component: resolve => require(['../components/page/menuManage/menuSetting.vue'], resolve)
                },
                {
                    path: '/menuSort',
                    component: resolve => require(['../components/page/menuManage/menuSort.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
