import SubItem from 'components/sub-item/sub-item.vue'
import { getList } from "api/getLotteryList";

export default {
  name: 'player',
  data() {
    return {
      isApp: false
    }
  },
  created() {
    console.log('this.$data', this.$data)
  },
  components: {
    SubItem
  },
  methods: {
    getLottery() {
      getList().then()
    }
  }
}
