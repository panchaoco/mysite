import * as types from './mutation-types'

export const clearAll = function ({commit, state}, {list, currentBtn, text}) {
  commit(types.SET_SUB_LIST, list)
  commit(types.SET_CURRENT_BTN, currentBtn)
  commit(types.SET_BTN_TEXT, text)
}



