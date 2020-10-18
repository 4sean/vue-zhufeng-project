import config from './config/public'
import axios from '@/utils/request';

//获取录播图功能
export const getSlider = ()=>axios.get(config.getSlider);