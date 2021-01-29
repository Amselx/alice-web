import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/oauth/token',
        method: 'get',
        params: {
            username: username,
            password: password,
            grant_type: 'password',
            scope: 'ALL'
        },
        headers: {
            'Authorization': 'Basic bWFsbC1nYXRld2F5OjEyMzEyMw==',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/oauth/check_token',
        method: 'get',
        params: {token: token}
    })
}

export function logout() {
    return request({
        url: '/admin/logout',
        method: 'post'
    })
}
