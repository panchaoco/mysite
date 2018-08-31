Table组件用法
-----------------------------------

## 介绍

该组件是基于iview框架Table组件源码的二次封装，目前新增了表格行、列的合并；根据表头筛选table数据；单元格可编辑的配置型功能

### tableConfig接口

```typescript
interface TableConfig {
  key: string, // 要合并列的key
  rowSpan?: number,// 合并行数
  colSpan?: number, // 合并的列数
}
```

### 基础用法

```html
<template>
  <Table :tableConfig="tableConfig" :isFilterTable="true"></Table>
</template>
<script>
  import Table from './table' // 真实路径请按照该组件在项目的位置拼写
  export default {
    name: 'table',
    components: {
      Table
    },
    data() {
      return {
        tableConfig: [ // tableConfig: TableConfig[]
          {key: 'group', rowSpan: 2},
          {key: 'group'},
        ],
      }
    }
  }
</script>
```

> 说明：tableConfig是实现TableConfig的数组，并且，tableConfig的length要等于用于渲染table数据的data的长度，且key字段必须存在

### columns说明

```js
 // example
 const columns = [
    {
      key: 'ip_address',
      title: 'IP地址',
      align: 'center',
      isRowSpan: true // 是否rowSpan
    },
    {
       key: 'add_time',
       title: '新增时间',
       align: 'center',
    },
    {
      key: 'admin_people',
      title: '操作人',
      align: 'center',
      isEdit: (row, index) => { // 是否与许单元格编辑 此处必须返回一个对象
        return {
          isEdit: row.is_ball_num === 0,
          index
        }
      },
      success: (row, index) => { // 编辑完成提交的回调
      },
      type: 'edit'
    }
  ]  
  
```

### columns新增参数说明

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:------|:------|:-----|
|isRowSpan|是否允许该列合并行|boolean|false|
|isColSpan|是否允许该列合并列|boolean|false|
|type|列类型，可选值为 index、selection、expand、html、edit;该参数是在原有的columns中新增了edit类型|string|undefined|
|isEdit|返回一个Object，包含是否允许编辑的isEdit参数与行数的索引index|Function|object|
|success|编辑后点击提交后的回调，该函数接收两个参数，row与index，row为改变后的当前行数据，index为当前行的索引|(row, index) => void|
|required|控制是否禁用当前列的筛选|boolean|false|


### Table组件新增参数

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:------|:------|:-----|
|isFilterTable|是否添加帅选功能|boolean|false|
|tableConfig|与原有props参数data的长度保持一致遵循前面提供的TableConfig接口定义的数组|Array|[]|

### 关于tableConfig的处理
tableConfig的数据处理请调用src/utils/utils.js提供的handleTableConfig方法，详细内容进以下链接查看
https://fq.sa2ga.com/panchao/TangChao-admin/blob/buyBallNum/src/utils/utils.js                 
                
