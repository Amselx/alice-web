import {login, logout, getInfo} from '../../api/login'
import {getToken, setToken, removeToken} from '../../utils/auth'

const user = {
    state: {
        token: null,
        refresh_token: null,
        scope: null,
        username: null,
        avatar: '',
        roles: [],
        privilegeIds: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_REFRESH_TOKEN: (state, refresh_token) => {
            state.refresh_token = refresh_token;
        },
        SET_PRIVILEGE_IDS: (state, privilegeIds) => {
            state.privilegeIds = privilegeIds;

        },

    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data;
                    if (!data) {
                        return resolve();
                    }
                    const token = data.access_token;
                    const refresh_token = data.refresh_token;
                    commit('SET_TOKEN', token);
                    commit('SET_REFRESH_TOKEN', refresh_token);
                    setToken(token);
                    resolve();
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response.data;
                    if (data.authorities && data.authorities.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_PRIVILEGE_IDS', data.authorities);
                    }
                    commit('SET_USERNAME', data.username);
                    // commit('SET_AVATAR', data.icon)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                removeToken();
                resolve();
                /*logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })*/
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            })
        }
    }
}

export default user
