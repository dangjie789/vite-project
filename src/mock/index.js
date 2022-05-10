import Mock from 'mockjs';
import { doLogin } from './data/loginData';

Mock.setup({
    timeout: '0-500',
})

Mock.mock('/api/dologin', doLogin)



export default Mock;