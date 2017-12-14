import * as types from './mutation-types'

const mutations = {
  [types.SET_SUB_LIST](state, list) {
    state.subList = list;
  },
  [types.SET_CURRENT_BTN](state, currentBtn) {
    state.currentBtn = currentBtn
  },
  [types.SET_BTN_TEXT](state, text) {
    state.btnText = text
  }
}

export default mutations
