
// イベントの基本

Vue.createApp({
  data() {
    return {
      message:""
    }
  },
  methods: {
    // クリック時に実行されるイベントハンドラー
    onclick() {
      this.message = new Date().toLocaleString()
    }
  }
}).mount('#app')