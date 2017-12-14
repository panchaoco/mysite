<template>
  <div class="sub-item-wrapper">
    <div class="button">
      <button class="btn" @click="updateSubList">{{ btnText }}</button>
    </div>
    <div class="sub-item-wrapper">
      <ul>
        <li v-if="subList.length" v-for="(item, index) in subList">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
          <span>{{ item.sex === 0 ? '男' : '女' }}</span>
          <span>{{ item.salary }}元</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import subItem from './sub-item'
  export default subItem
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @require "./sub-item.styl"
</style>
