import Cookies from 'js-cookie';
import {constantRouterMap, asyncRouterMap} from '../../router/index'

const permission = {
    state: {
        routers:  [],
        asyncRouters: []
    },
    mutations: {
        SET_ROUTER(state, routers) {
            state.asyncRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        GenerateRouters({commit}, privilegeIds) {
            return new Promise((resolve, reject) => {
                commit('SET_ROUTER', asyncRouterMap);
                resolve();
            });
        }
    }
};

export default permission;
