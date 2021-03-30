import _ from 'lodash'

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 10,
      pageCount: 0,
      allItems: [],
      items: [],
    }
  },
  computed: {
    
  },
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
    onChange(event) {
      this.items = _.filter(this.allItems, event);
    }
  },
}