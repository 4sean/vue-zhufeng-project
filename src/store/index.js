import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule'

Vue.use(Vuex)
//require.context()动态加载模块，实现store的状态分割
//读取modules 的目录，不读子目录 匹配js文件的正则表达式
const files = require.context('./modules',false,/\.js$/);
files.keys().forEach(key => {
  //模块对应的内容
  let store = files(key).default;
  let moduleName = key.replace(/^\.\//,'').replace(/.js$/,'');
  //动态的添加 模块
  let modules = rootModule.modules = (rootModule.modules || {});
  modules[moduleName] = store;
  modules[moduleName].namespaced = true;
});

let store = new Vuex.Store(rootModule);
export default store;

