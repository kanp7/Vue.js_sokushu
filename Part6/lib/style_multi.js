Vue.createApp({
  data() {
    return {
      message: 'こんにちは。Vue.js!',
      //スタイル情報を準備
      color: {
        backgroundColor: 'Yellow',
        color: 'Red'
      },
      big: {
        fontSize: '1.5em'
      }
    }
  }
}).mount('#app')