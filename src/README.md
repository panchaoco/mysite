Table组件用法
-----------------------------------

## 介绍

该组件是基于iview框架Table组件源码的二次封装，目前新增了表格行、列的合并；根据表头筛选table数据；单元格可编辑的配置型功能

## 基础用法

```ts
interface TableConfig {
  key: string, // 要合并列的key
  rowSpan?: number,// 合并行数
  colSpan?: number, // 合并的列数
}
>

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
        tableConfig: [
          {key: 'group', rowSpan: 2},
          {key: 'group'},
        ],
      }
    }
  }
</script>
