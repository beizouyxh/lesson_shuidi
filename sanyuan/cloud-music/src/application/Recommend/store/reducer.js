//负责返回recommend 的状态
import { fromJS } from 'immutable';
//状态不可改变，改变了就返回新的状态
const defaultState=fromJS({
    bannerList:[]    //幻灯片
})

console.log(defaultState,'....')   //Map
export default (state = defaultState,action) => {
    return state
}