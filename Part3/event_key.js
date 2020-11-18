Vue.createApp({
  data() {
    return {
      name: 'ゲスト'
    }
  },
  methods: {
    //テキストボックスの内容をクリア
    clear() {
      this.name = ""
    }
  }
}).mount('#app')