
// プロパティ値をアプリ独自のルールで加工する - 算出プロパティ

Vue.createApp({
  data() {
    return {
      email: 'Yamada@examaple.com'
    }
  },

  // 演算した結果を取得する算出プロパティ
  computed: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase()
    }
  }
}).mount('#app')