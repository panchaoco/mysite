Vue项目基本结构
---------------------------------
> 结构就如当前demo，大家可以一层层点开看一下
## 简单描述

项目开发时，可首先在src目录下新建common、api目录，然后便在build/webpack.base.conf.js里面配置这几个目录的别名

### common目录

common目录用存放通用于的一些图片、样式文件和脚本文件，因此可在下方再新建images、stylus（根据项目采用的css预编译语法来）、scripts三个二级目录。

### api

而api目录则是用于我们进行接口封装，接口封装的规则为：一个类型一个文件，例如用户相关类的接口，我们可在api下新建getUserInfo文件，示例代码如下。

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
    params payload
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




For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
