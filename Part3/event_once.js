Vue.createApp({
  data() {
    return {
      message: ""
    }
  },
  methods: {
    //クリック時に実行されるイベントハンドラー
    onclick() {
      this.message = new Date().toLocaleTimeString()
    }
  }
}).mount('#app')