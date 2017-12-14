import * as types from './mutation-types'

/**
 * action中函数只能接口两个参数，一个为官方提供的解构参数{commit, state},另外一个是我们要传入的参数，注意:
 * 如果我们需要传入多个参数时，也要用解构参数的方式传递，也就是传入一个对象，对象里面包含我们的参数
 * @param commit
 * @param state
 * @param list
 * @param currentBtn
 * @param text
 */
export const clearAll = function ({commit, state}, {list, currentBtn, text}) {
  commit(types.SET_SUB_LIST, list)
  commit(types.SET_CURRENT_BTN, currentBtn)
  commit(types.SET_BTN_TEXT, text)
}



