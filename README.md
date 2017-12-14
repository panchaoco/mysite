Vue项目基本结构
---------------------------------
> 结构就如当前demo，大家可以一层层点开看一下
## 简单描述

项目开发时，可首先在src目录下新建common、api, page目录，然后便在build/webpack.base.conf.js里面配置这几个目录的别名

### common目录

common目录用存放通用于的一些图片、样式文件和脚本文件，因此可在下方再新建images、stylus（根据项目采用的css预编译语法来）、scripts三个二级目录。

### api

而api目录则是用于我们进行接口封装，接口封装的规则为：一个类型一个文件，例如用户相关类的接口，我们可在api下新建getUserInfo文件，示例代码如下。

### page
目录用于存放基础组件，也就是没有任何业务功能的组件，如果需要处理业务功能，只需要通过this.$emit('event-name',args)这样的方式派发事件，父组件监听调用即可。

### getUserInfo示例

```getUserInfo
// 获取用户基础信息
export function getUserInfo(payload) {
  // typeof payload = 'object'

  let url = 'http://192.168.10.54:9091/userInfo';
  axios.get(url, {
    params payload
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(e) {
    return Promise.reject(e)
  }
}
// 获取用户中奖纪录
export function getUserWinningRecord(payload) {
  // typeof payload = 'object
  let url = 'http://192.168.10.54:9091/userInfo';
  axios.get(url, {
    params: payload
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(e) {
    return Promise.reject(e)
  }
}
....
```

### 调用示例
```user
//user.vue
<template>
  <div class="sub-item-wrapper">
  </div>
</template>

<script>
  import {getUserInfo, getUserWinningRecord} from 'api/getUserInfo' //因为我们配置了别名，所以不再需要用相对路径去查找文件，因此可减少路径的报错和增加代码的规范
  export default {
    mounted() {
      getUserInfo({ // 同过这种方式的调用，可实现接口的重用和统一的重写配置，其他需要的地方用相同方式引用+调用即可
        user: 'zhangsan'
      }).then((res) => { // 调用成功的返回
        console.log(res)
      }).catch(e => { // 调用失败的返回

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @require "./sub-item.styl"
</style>
```

## 关于Vuex中的Store
如果项目中需要用到vuex，便需要在src目录下新建与common同级的目录store目录，然后在store里面新建state.js、mutation.js、mutation-type.js、actions.js、getters.js、index.js这几个目录

```index
//index.js用于调用vuex插件，而注册mutation和state等相关的功能，示例如下：

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// state.js用户存放需要管理的数据，示例如下

const state = {
  subList: [],
  currentBtn: 1,
  btnText: '改变1'
}

export default state

//mutation-type.js 用于配置与state里面一一对应的需要改变的数据的常量名，示例如下：
export const SET_SUB_LIST = 'SET_SUB_LIST'
export const SET_CURRENT_BTN = 'SET_CURRENT_BTN'
export const SET_BTN_TEXT = 'SET_BTN_TEXT'

//mutation.js 用户触发mutation，由此达到改变state数据的功能，示例如下：

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

//actions.js用于触发多个mutation，并执行一些额外操作时（action适情况而定使用）,示例如下
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

```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
