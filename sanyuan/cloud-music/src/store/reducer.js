import { combineReducers } from 'redux-immutable';   //redux-immutable

//reducer 常见的做法   1. 将各个模块的reducer 汇合成一个reducer  
// 因为在大型项目里，每个模块的reducer，建议放到application/page 组件模块下
// recommend Router,路由级别组件，store意义提升
//数据流模块跟UI 模块放在一起 组成业务模块
import { reducer as recommendReducer } from '../application/Recommend/store/index';    

export default combineReducers({
  // 之后开发具体功能模块的时候添加reducer
  recommend: recommendReducer,    //recommend 相当于模块
});