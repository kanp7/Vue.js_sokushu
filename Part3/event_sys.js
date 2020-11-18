Vue.createApp({
  data() {
    return {
      message: ""
    }
  },
  methods: {
    //決められたキーの押下でヘルプを表示
    help() {
      window.alert('20文字以内で入力してください')
    }
  }
}).mount('#app')