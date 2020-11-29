Vue.createApp({
  data() {
      return {
          list: ['melon', 'orange', 'peach']
      }
  },
  methods: {
      onclick() {
          this.list[1] = 'strawberry'
          // this.list.splice(1, 1, 'strawberry')
          // this.list = this.list.concat('strawberry')
      }
  }
}).mount('#app')