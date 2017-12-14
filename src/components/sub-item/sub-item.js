//先导入
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'subItem',
  data() {
    return {
      isApp: false,
      list: [
        {
          name: 'John', age: 18, sex: 1, salary: 5000
        },
        {
          name: 'Tom', age: 20, sex: 1, salary: 6000
        },
        {
          name: 'nike', age: 22, sex: 0, salary: 8000
        },
        {
          name: 'Jude', age: 28, sex: 1, salary: 7000
        },
      ]
    }
  },
  created() {
    console.log('将list保存到state中')
    this.saveSubList(this.list)
    console.log(this.subList)

  },
  computed: { //mapGetters放到计算器属性
    ...mapGetters([
      'subList',
      'currentBtn',
      'btnText'
    ])
  },
  methods: {
    // mapMutations放到methods中，推荐用别名的方式来映射到对应mutation，调用方式就为this.saveSubList(args)就行了
    ...mapMutations({
      saveSubList: 'SET_SUB_LIST', // 将 `this.saveSubList()` 映射为 `this.$store.commit('SET_SUB_LIST')
      saveCurrentBtn: 'SET_CURRENT_BTN',
      saveText: 'SET_BTN_TEXT'
    }),
    // mapActions因为我们就是以骆驼峰的方式命名的，因为不用映射，参数直接为数组即可
    ...mapActions([
      'clearAll'
    ]),
    updateSubList() {
      if (this.currentBtn === 1) {
        let list =  [
          {
            name: 'John', age: 28, sex: 1, salary: 50200
          },
          {
            name: 'Tom', age: 60, sex: 1, salary: 60200
          },
          {
            name: 'nike', age: 212, sex: 0, salary: 80200
          },
          {
            name: 'Jude', age: 228, sex: 1, salary: 70200
          },
        ]
        this.saveSubList(list)
        this.saveCurrentBtn(2);
        this.saveText('清空')
      } else if (this.currentBtn === 2) {
        this.clearAll({
          list: [],
          currentBtn: 3,
          text: '恢复'
        })
      } else {
        this.saveSubList(this.list)
        this.saveCurrentBtn(1)
        this.saveText('改变1')
      }
    }
  }
}
