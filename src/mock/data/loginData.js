import Mock from 'mockjs'
import md5 from 'md5'

export const USER_MAP = {
    admin: {
        username: 'admin',
        password: md5('admin'),
        id: 1,
        token: md5('vue-test-admin'),
        sex: '男',
        email: Mock.mock('@email'),
        name: Mock.mock('@cname'),
        avatar: Mock.mock('@image'),
    },
    g_user: {
        username: 'g_user',
        password: md5('g_user'),
        id: 2,
        token: md5('vue-test-g_user'),
        sex: '男',
        email: Mock.mock('@email'),
        name: Mock.mock('@cname'),
        avatar: Mock.mock('@image'),
    },
    vip_user: {
        username: 'vip_user',
        password: md5('vip_user'),
        id: 3,
        token: md5('vue-test-vip_user'),
        sex: '女',
        email: Mock.mock('@email'),
        name: Mock.mock('@cname'),
        avatar: Mock.mock('@image'),
    }
}

export const doLogin = (req) => {
    const getBody = JSON.parse(req.body)
    let result = {}
    if (USER_MAP[getBody.username]) {
        if (USER_MAP[getBody.username].password !== md5(getBody.password)) {
            result = {
                code: 123123213231,
                data: {},
                msg: '密码错误！'
            }
        } else {
            result = {
                code: 200,
                data: { token: USER_MAP[getBody.username].token },
                msg: '登录成功！'
            }
        }
    } else {
        result = {
            code: 123123213231,
            data: {},
            msg: '此账号不存在！'
        }
    }
    return result
}