/* 环境配置 */
const env =
    import.meta.env.MODE || 'prod';
const EnvConfig = {
    development: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/a30eb1e55b69abeabe6bd03c1072225e/api'
    },
    test: {
        baseApi: '//test.feature.com',
        mockApi: 'https://www.fastmock.site/mock/a30eb1e55b69abeabe6bd03c1072225e/api'
    },
    prod: {
        baseApi: '//prod.feature.com',
        mockApi: 'https://www.fastmock.site/mock/a30eb1e55b69abeabe6bd03c1072225e/api'
    }
}

export default {
    env,
    mock: true,
    //扩展操作符
    ...EnvConfig[env]
}