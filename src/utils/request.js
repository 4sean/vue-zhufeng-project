//将axios二次封装
//每个实例的拦截器和其他人无关 如果使用全局的实例 那么给每次请求当杜配置拦截器就做不到
import config from '@/config'
import axios from 'axios'

class HttpRequest {
  constructor() {
    //可以增加实例属性 后台接口的路径 开发模式和生产模式不一样 在config里新建index.js进行配置
    this.baseRUL = config.baseRUL;
    this.timeout = 3000
  }
  setInterceptors(instance) {
    instance.interceptors.request.use(config => {
      //一般增加一些token属性
      return config;
    })
    instance.interceptors.response.use(res => {
      if (res.status == 200) {
        //服务返回的结果都会放到data中
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res.data.data);
      }
    }, err => {
      //单独处理其他的状态码
      switch (err.response.status) {
        case '401':
          console.log(err);
          break;
        default:
          break;
      }
      return Promise.reject(err)
    })
  }
  mergeOptions(options){
    return {baseRUL:this.baseRUL,timeout:this.timeout,...options}
  }
  request(options){
    const instance = axios.create();
    this.setInterceptors(instance);
    const opts = this.mergeOptions(options);         
    return instance(opts);                                                                                                                                                                                                                            
  }
  get(url,config){
    return this.request({
      method:'get',
      url,
      ...config
    })
  }
  post(url,data){
    return this.request({
      method:'post',
      url,
      data
    })
  }
}
export default new HttpRequest;