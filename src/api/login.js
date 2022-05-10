import { axios } from 'axios'

export const doLogin = (data) => {
    return axios.request({
        url: '/api/dologin',
        method: 'post',
        data,
    })
}