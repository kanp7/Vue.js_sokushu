
// イベントハンドラーに引数を渡す場合

Vue.createApp({
  methods: {
    onclick(message) {
      console.log(message)
    }
  }
}).mount('#app')