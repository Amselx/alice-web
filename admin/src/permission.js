import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui'
import {getToken} from './utils/auth'
import Layout from "./views/layout/Layout"; // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start();
    let token = store.getters.token;
    if (token) {
        if (to.path === '/login') {
            next({path: '/'});
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if (store.getters.username === null) {
                store.dispatch('GetInfo').then(data => { // 拉取用户信息
                    store.dispatch('GenerateRouters', data.authorities).then(() => {
                        router.addRoutes(store.getters.asyncRouters);
                        next({...to, replace: true}); // 确保 addRouters 已完成
                        // next();
                    });
                    next()
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        Message.error(err || 'Verification failed, please login again')
                        next({path: '/'})
                    })
                })
            } else {
                next()
            }

        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done();
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
