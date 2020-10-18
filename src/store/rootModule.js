import {getSlider} from '../api/public';
import * as types from './action-types'

const rootModule ={
  state: {
    sliders:[],
  },
  mutations: {
    [types.SET_SLIDERS](state,payload){
      state.sliders =payload;
    }
  },
  actions: {
    //调用getSlider的api
    async [types.SET_SLIDERS]({commit}){
      let {data} = await getSlider();
      commit(types[SET_SLIDERS],DataCue)
    }
  },
  modules: {
  }
}
export default rootModule;