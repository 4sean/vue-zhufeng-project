export default{
  //开发打包是默认的两个环境
  baseURL:process.env.NODE_ENV === 'development' ? 'http://vue.zhufengpeixun.cn':''
}

console.log(process.env);