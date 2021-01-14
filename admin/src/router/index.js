import Vue from 'vue';
import Router from 'vue-router';
import pms from './pms';
import sms from './sms';
import oms from './oms';

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index'),
            meta: {title: '首页', icon: 'home'}
        }]
    },
    // {path: '*', redirect: '/404', hidden: true},
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/404', component: () => import('@/views/404'), hidden: true},
];

export const asyncRouterMap = [
    pms,
    oms,
    sms
];

export default new Router({
    mode: 'history',
    base: '/alice',
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
